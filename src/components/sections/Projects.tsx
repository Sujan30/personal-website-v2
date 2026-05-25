import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const FEATURED_COUNT = 5;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);
  const visible = showAll ? projects : featured;

  return (
    <section id="projects" className="py-16 lg:py-24">
      <p className="mb-8 text-xs font-semibold tracking-widest uppercase text-sky-400 lg:hidden">
        Projects
      </p>

      <div className="space-y-4">
        {visible.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <AnimatePresence>
        {!showAll && rest.length > 0 && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-sky-400 transition-colors duration-150 group"
            >
              Show {rest.length} more projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
