"use client";

import { setActiveSection } from "@/lib/features/menu/menuSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type PageContainerProps = {
  children: React.ReactNode;
  sidePadding?: boolean;
  noHFull?: boolean;
  sectionName: string;
  threshold?: number;
  others?: string;
};

export default function PageContainer({
  children,
  sidePadding,
  sectionName,
  noHFull,
  threshold = 0.75,
  others,
}: PageContainerProps) {
  const { ref, inView } = useInView({ threshold });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(sectionName));
    }
  }, [dispatch, inView, sectionName]);
  return (
    <section
      id={sectionName}
      ref={ref}
      className={`flex w-full flex-col items-center justify-center ${others} ${
        sidePadding ? "px-8 lg:px-48" : ""
      } ${noHFull ? "" : "h-screen"}`}
    >
      {children}
    </section>
  );
}
