type PageHeadingProps = {
  title: string;
};
export default function PageHeading({ title }: PageHeadingProps) {
  return (
    <>
      <h1 className="bg-gradient-to-r from-neutral-100 from-15% to-neutral-500 font-semibold bg-clip-text text-5xl text-transparent mb-16">
        {title}
      </h1>
    </>
  );
}
