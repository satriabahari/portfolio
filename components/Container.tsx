export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
