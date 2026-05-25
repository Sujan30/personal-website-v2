import { projects } from '@/data/projects';
import { ProjectRow } from '@/components/projects/ProjectRow';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const archive  = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 lg:py-24">
      <p className="mb-8 text-xs font-semibold tracking-widest uppercase text-accent lg:hidden">
        Projects
      </p>

      <div className="space-y-4">
        {featured.map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
      </div>

      {archive.length > 0 && (
        <details className="mt-10 group">
          <summary className="cursor-pointer text-sm text-text-tertiary hover:text-accent transition-colors duration-150 select-none">
            More projects ({archive.length}) →
          </summary>
          <div className="mt-4 space-y-1">
            {archive.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
