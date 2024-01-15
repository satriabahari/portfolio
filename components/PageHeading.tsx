type PageHeadingProps = {
  title: string;
};
export default function PageHeading({ title }: PageHeadingProps) {
  return (
    <>
      <h1 className="mb-16 bg-gradient-to-r from-neutral-900  from-15% to-neutral-500 bg-clip-text text-5xl font-semibold text-transparent dark:from-neutral-100 dark:to-neutral-500">
        {title}
      </h1>
    </>
  );
}
