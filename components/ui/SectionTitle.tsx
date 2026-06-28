type Props = { number: string; title: string };

export default function SectionTitle({ number, title }: Props) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="font-mono text-sm font-medium"
        style={{ color: "var(--accent)" }}
      >
        {number}.
      </span>
      <h2
        className="text-3xl md:text-4xl font-bold whitespace-nowrap"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-px ml-2"
        style={{ backgroundColor: "var(--border)" }}
      />
    </div>
  );
}
