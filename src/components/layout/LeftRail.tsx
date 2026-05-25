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
      <div>
        {/* Name */}
        <h1 className="font-serif italic text-[52px] leading-none text-text-primary tracking-tight">
          Sujan Nandikol Sunilkumar
        </h1>
        <p className="mt-3 text-[18px] font-medium text-text-primary">
          CS @ SJSU
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-text-secondary max-w-xs">
          I build AI agents and ship them. Currently building{' '}
          <a
            href="https://internshipmatcher.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            Internship Matcher
          </a>
          .
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
                    ? 'text-text-primary'
                    : 'text-text-tertiary hover:text-text-primary',
                ].join(' ')}
              >
                <span
                  className={[
                    'block h-px flex-shrink-0 transition-all duration-300',
                    isActive ? 'w-12 bg-accent' : 'w-6 bg-text-tertiary/50',
                  ].join(' ')}
                  aria-hidden
                />
                <span className={isActive ? 'text-accent' : ''}>{label}</span>
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
