import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  impact?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
      style={{
        boxShadow: "0 0 0 0 rgba(59,130,246,0)",
      }}
      whileHover={{
        boxShadow: "0 0 30px rgba(59,130,246,0.08)",
      }}
    >
      {/* Top row: links */}
      <div className="mb-5 flex items-center justify-between">
        <span className="label-eyebrow text-zinc-600">Project</span>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-white/[0.07] text-zinc-500 transition-colors hover:border-white/20 hover:text-white"
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
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-white/[0.07] text-zinc-500 transition-colors hover:border-white/20 hover:text-white"
              aria-label="Live demo"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold tracking-tight text-white group-hover:text-primary transition-colors mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed flex-grow mb-5">
        {project.description}
      </p>

      {/* Impact */}
      {project.impact && (
        <p className="text-xs text-zinc-500 mb-4 font-mono-custom leading-relaxed border-l-2 border-primary/30 pl-3">
          {project.impact}
        </p>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono-custom inline-flex items-center rounded px-2 py-0.5 text-[10px] font-medium bg-white/[0.04] text-zinc-400 border border-white/[0.06] tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
