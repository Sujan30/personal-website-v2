import { type Project } from '@/data/projects';

export function HeroMetric({ project }: { project: Project }) {
  if (project.display.type !== 'hero') return null;
  const d = project.display;
  return (
    <div className="mt-4 flex items-start gap-6">
      <div className="font-serif italic text-[64px] leading-none text-accent shrink-0">
        {d.metric}
      </div>
      <div className="border-l-2 border-accent pl-3 text-xs text-text-secondary max-w-[240px] leading-relaxed">
        {d.metricLabel}
        {d.subStat && (
          <div className="mt-2 text-text-tertiary">{d.subStat}</div>
        )}
      </div>
    </div>
  );
}
