type PageContainerProps = {
  children: React.ReactNode;
  sidePadding?: boolean;
};

export default function PageContainer({
  children,
  sidePadding,
}: PageContainerProps) {
  return (
    <section
      className={`flex min-h-screen w-full flex-col items-center justify-center ${
        sidePadding ? "px-48" : ""
      }`}
    >
      {children}
    </section>
  );
}
