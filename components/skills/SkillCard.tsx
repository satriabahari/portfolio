type SkillCardProps = {
  name: string;
  icon: JSX.Element;
};

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="px-4">
      <div className="flex w-full space-x-2 rounded-full bg-neutral-800 px-4 py-2">
        <div className="h-6 w-6">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
}
