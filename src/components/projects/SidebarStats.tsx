import { type Project } from '@/data/projects';

export function SidebarStats({ project }: { project: Project }) {
  if (project.display.type !== 'sidebar') return null;
  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
      {project.display.stats.map((s) => (
        <li
          key={s.label}
          className="bg-surface/60 border-l-2 border-accent rounded-r px-3 py-2"
        >
          <div className="font-serif italic text-2xl text-text-primary leading-none">
            {s.value}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-wider text-text-tertiary leading-snug">
            {s.label}
          </div>
        </li>
      ))}
    </ul>
  );
}
