import { useActiveSection, type SectionId } from '@/hooks/useActiveSection';
import { CursorSpotlight } from '@/components/CursorSpotlight';
import LeftRail from './LeftRail';
import RightRail from './RightRail';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Books from '@/components/sections/Books';
import SectionFooter from '@/components/sections/SectionFooter';

const SECTION_IDS: SectionId[] = ['about', 'experience', 'projects', 'books'];

export default function SplitLayout() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-screen bg-background">
      <CursorSpotlight />

      {/* Mobile header */}
      <header className="lg:hidden px-6 pt-12 pb-8">
        <h1 className="font-serif italic text-[42px] leading-none text-foreground tracking-tight">
          Sujan
        </h1>
        <p className="mt-2 text-sm font-semibold text-foreground">Software Engineer</p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Building at the intersection of neurotech and AI.
        </p>

        {/* Mobile nav pills */}
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Page sections">
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className={[
                'rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-150 border',
                activeSection === id
                  ? 'border-sky-400/50 text-sky-400 bg-sky-400/10'
                  : 'border-white/[0.07] text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              {id}
            </button>
          ))}
        </nav>
      </header>

      {/* Desktop split layout */}
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <div className="lg:flex lg:gap-16 lg:items-start">
          {/* Left rail — sticky on desktop */}
          <LeftRail
            activeSection={activeSection}
            className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:w-[38%] lg:flex-shrink-0 lg:py-24"
          />

          {/* Right rail — scrollable content */}
          <RightRail className="lg:w-[62%] relative z-40">
            <About />
            <Experience />
            <Projects />
            <Books />
            <SectionFooter />
          </RightRail>
        </div>
      </div>
    </div>
  );
}
