"use client";

import { setActiveSection } from "@/lib/features/menu/menuSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type PageContainerProps = {
  children: React.ReactNode;
  sidePadding?: boolean;
  sectionName: string;
};

export default function PageContainer({
  children,
  sidePadding,
  sectionName,
}: PageContainerProps) {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(sectionName));
    }
  }, [dispatch, inView, sectionName]);
  return (
    <section
      ref={ref}
      className={`flex min-h-screen w-full flex-col items-center justify-center ${
        sidePadding ? "px-48" : ""
      }`}
    >
      {children}
    </section>
  );
}
