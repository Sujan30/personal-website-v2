interface TagPillProps {
  label: string;
}

export function TagPill({ label }: TagPillProps) {
  return (
    <span className="font-mono text-[10px] px-1.5 py-px text-text-tertiary border border-border rounded tracking-wide">
      {label}
    </span>
  );
}
