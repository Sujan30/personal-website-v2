import { type Project } from '@/data/projects';

export function TransformArrow({ project }: { project: Project }) {
  if (project.display.type !== 'transform') return null;
  const d = project.display;
  return (
    <div className="mt-4">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-serif italic text-3xl text-text-tertiary line-through decoration-text-tertiary/40">
          {d.before}
        </span>
        <span className="text-accent text-xl">→</span>
        <span className="font-serif italic text-3xl text-accent">{d.after}</span>
        <span className="text-[11px] uppercase tracking-wider text-text-secondary border-l-2 border-accent pl-2">
          {d.caption}
        </span>
      </div>
      {d.subStats && d.subStats.length > 0 && (
        <div className="mt-3 flex gap-5 text-xs text-text-secondary">
          {d.subStats.map((s) => (
            <span key={s.label}>
              <b className="text-text-primary font-medium">{s.value}</b> {s.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
