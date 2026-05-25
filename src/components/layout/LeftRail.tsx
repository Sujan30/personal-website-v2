import SocialLinks from '@/components/SocialLinks';
import { type SectionId } from '@/hooks/useActiveSection';

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'books',      label: 'Books' },
];

interface LeftRailProps {
  activeSection: SectionId;
  className?: string;
}

export default function LeftRail({ activeSection, className = '' }: LeftRailProps) {
  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className={`flex flex-col justify-between ${className}`}>
      {/* Identity + nav */}
      <div>
        {/* Name */}
        <h1 className="font-serif italic text-[48px] leading-none text-foreground tracking-tight">
          Sujan
        </h1>
        <p className="mt-3 text-sm font-semibold text-foreground">
          Software Engineer
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-[220px]">
          Building at the intersection of neurotech and AI.
        </p>

        {/* Section nav */}
        <nav className="mt-12 flex flex-col gap-0.5" aria-label="Page sections">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={[
                  'flex items-center gap-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 text-left',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                ].join(' ')}
              >
                {/* Animated line indicator */}
                <span
                  className={[
                    'block h-px flex-shrink-0 transition-all duration-300',
                    isActive ? 'w-10 bg-sky-400' : 'w-5 bg-muted-foreground/50',
                  ].join(' ')}
                  aria-hidden
                />
                <span className={isActive ? 'text-sky-400' : ''}>{label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Socials */}
      <SocialLinks className="justify-start gap-2 mt-8" />
    </aside>
  );
}
