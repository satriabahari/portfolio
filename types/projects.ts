export type ProjectsProps = {
  id: number,
  title: string,
  description: string,
  image: string,
  link_demo?: string | null,
  link_github?: string | null,
  stacks: JSX.Element[],
}