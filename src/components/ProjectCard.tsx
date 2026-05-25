import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { type Project } from "@/data/projects";

export type { Project };

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-200 hover:border-sky-400/20 hover:bg-white/[0.04]"
      whileHover={{
        boxShadow: "0 0 30px rgba(56,189,248,0.06)",
      }}
    >
      {/* Top row: links */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/60">
          Project
        </span>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-white/[0.07] text-muted-foreground transition-colors hover:border-sky-400/30 hover:text-sky-400"
              aria-label="GitHub repository"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-white/[0.07] text-muted-foreground transition-colors hover:border-sky-400/30 hover:text-sky-400"
              aria-label="Live demo"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold tracking-tight text-foreground group-hover:text-sky-400 transition-colors duration-150 mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-muted-foreground leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      {/* Impact */}
      {project.impact && (
        <p className="text-[11px] text-muted-foreground/70 mb-3 font-mono leading-relaxed border-l-2 border-sky-400/30 pl-3">
          {project.impact}
        </p>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium bg-sky-400/10 text-sky-300 border border-sky-400/20 tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
