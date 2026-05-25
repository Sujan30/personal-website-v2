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
    <div className="relative min-h-screen bg-bg text-text-primary">
      <CursorSpotlight />

      {/* Mobile header */}
      <header className="lg:hidden px-6 pt-12 pb-8">
        <h1 className="font-serif italic text-[42px] leading-none text-text-primary tracking-tight">
          Sujan Nandikol Sunilkumar
        </h1>
        <p className="mt-2 text-sm font-semibold text-text-primary">CS @ SJSU</p>
        <p className="mt-1.5 text-sm text-text-secondary">
          I build AI agents and ship them.
        </p>

        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Page sections">
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }
              className={[
                'rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-150 border',
                activeSection === id
                  ? 'border-accent/50 text-accent bg-accent/10'
                  : 'border-border text-text-tertiary hover:text-text-primary',
              ].join(' ')}
            >
              {id}
            </button>
          ))}
        </nav>
      </header>

      {/* Desktop split layout */}
      <div className="mx-auto max-w-screen-xl px-6 lg:px-24">
        <div className="lg:flex lg:gap-12 lg:items-start">
          <LeftRail
            activeSection={activeSection}
            className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:w-[40%] lg:flex-shrink-0 lg:py-24"
          />

          <RightRail className="lg:w-[60%] relative z-40">
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
