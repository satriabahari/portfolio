export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full min-h-screen flex-col items-center justify-center">
      {children}
    </section>
  );
}
