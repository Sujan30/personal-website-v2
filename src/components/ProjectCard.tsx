
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-card/80 via-card to-card/80" />
      
      <div className="mb-4 flex items-center justify-between">
        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
          Project {index + 1}
        </div>
        
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted hover:text-primary"
                aria-label="GitHub repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted hover:text-primary"
                aria-label="Live demo"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="mt-2 mb-4 text-muted-foreground flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {project.impact && (
        <p className="mt-3 text-sm text-muted-foreground">
          Impact: {project.impact}
        </p>
      )}
    </motion.div>
  );
};

export default ProjectCard;
