import { type Project } from '@/data/projects';

export function Scoreboard({ project }: { project: Project }) {
  if (project.display.type !== 'scoreboard') return null;
  return (
    <div className="mt-4 grid grid-cols-4 border-t border-border pt-3">
      {project.display.stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-2 ${i !== 0 ? 'border-l border-border' : ''}`}
        >
          <div className="font-serif italic text-[26px] text-accent leading-none">
            {s.value}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-wider text-text-tertiary leading-snug">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
