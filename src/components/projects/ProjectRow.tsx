import { type Project } from '@/data/projects';
import { HeroMetric } from './HeroMetric';
import { SidebarStats } from './SidebarStats';
import { Scoreboard } from './Scoreboard';
import { TransformArrow } from './TransformArrow';
import { SimpleRow } from './SimpleRow';
import { ExternalLink } from '@/components/primitives/ExternalLink';
import { TagPill } from '@/components/primitives/TagPill';

const STATUS_BADGE: Record<string, string> = {
  shipped:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  hackathon:'bg-amber-500/10  text-amber-400  border-amber-500/20',
  wip:      'bg-accent/10     text-accent      border-accent/20',
  archived: 'bg-surface       text-text-tertiary border-border',
};

export function ProjectRow({ project }: { project: Project }) {
  const displayUrl = project.live ?? project.github;

  const Body = {
    hero:      HeroMetric,
    sidebar:   SidebarStats,
    scoreboard:Scoreboard,
    transform: TransformArrow,
    simple:    SimpleRow,
  }[project.display.type] as React.ComponentType<{ project: Project }>;

  return (
    <article className="group relative -mx-4 rounded-lg p-4 transition-all duration-200 hover:bg-surface/40 hover:ring-1 hover:ring-accent/15">
      <header className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors duration-150">
          {displayUrl ? (
            <a
              href={displayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              {project.title}
              <span className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ) : (
            project.title
          )}
        </h3>

        <div className="flex items-center gap-2 shrink-0">
          {project.status && (
            <span className={`text-[10px] px-1.5 py-px rounded border font-mono tracking-wide ${STATUS_BADGE[project.status]}`}>
              {project.status}
            </span>
          )}
          <span className="text-xs text-text-tertiary tracking-wider">{project.year}</span>
        </div>
      </header>

      <p className="text-sm leading-relaxed text-text-secondary mb-3 max-w-prose">
        {project.description}
      </p>

      <Body project={project} />

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <li key={t}>
            <TagPill label={t} />
          </li>
        ))}
      </ul>

      {(project.github || project.live) && (
        <div className="mt-2 flex gap-3 text-[11px]">
          {project.github && (
            <ExternalLink href={project.github}>github ↗</ExternalLink>
          )}
          {project.live && (
            <ExternalLink href={project.live}>live ↗</ExternalLink>
          )}
        </div>
      )}
    </article>
  );
}
