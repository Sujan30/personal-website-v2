
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("featured-projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
      
      <div className="container-custom text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-muted mb-6"
        >
          Hello, I'm Sujan
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h1 max-w-4xl mx-auto mb-6"
        >
          Software Engineer | AI Enthusiast | Builder & Problem-Solver
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Computer science & linguistics student at SJSU, passionate about AI, automation, and building innovative projects that solve real problems.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/projects" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View My Projects
          </Link>
          <Link
            to="/contact" 
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get In Touch
          </Link>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          onClick={scrollToProjects}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full hover:bg-accent transition-all"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="animate-bounce" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
