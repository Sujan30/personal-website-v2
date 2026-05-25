import { ArrowUpRight } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <p className="mb-8 text-xs font-semibold tracking-widest uppercase text-accent lg:hidden">
        Experience
      </p>

      <div className="space-y-2">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group relative rounded-lg p-4 transition-all duration-150
              hover:bg-surface/40 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
              border border-transparent hover:border-accent/10
              -mx-4"
          >
            <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

            <div className="lg:flex lg:gap-8">
              <p className="mb-2 lg:mb-0 shrink-0 text-xs tabular-nums text-text-tertiary lg:w-32 lg:text-right lg:pt-0.5">
                {exp.dates}
              </p>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-150">
                  {exp.role}{' '}
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal text-text-secondary hover:text-accent inline-flex items-center gap-0.5 transition-colors duration-150"
                      onClick={(e) => e.stopPropagation()}
                    >
                      · {exp.company}
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  ) : (
                    <span className="text-text-secondary font-normal">· {exp.company}</span>
                  )}
                </h3>
                <p className="mt-0.5 text-xs text-text-tertiary">{exp.location}</p>

                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-[13px] text-text-secondary leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pl-0 lg:pl-40">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-accent transition-colors duration-150 group"
        >
          View full résumé
          <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
