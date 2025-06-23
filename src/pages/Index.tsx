import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectCard, { Project } from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, FileText, Twitter, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Calgentic",
    description: "AI-powered calendar assistant that helps users manage their time more effectively by analyzing schedules and suggesting optimizations.",
    techStack: ["GPT-4o", "Google Calendar API", "Typescript", "Shadcn UI", "Python", "Flask", "Google Auth", "Render (for deployment)"],
    githubUrl: "https://github.com/Sujan30/calgentic-UI",
    liveUrl: "https://calgentic.com",
    impact: "Drove over 35,000 impressions across Instagram and Tik Tok platforms marketing this project. Have about 20 monthly users. "
  },
  {
    id: 2,
    title: "Google Docs & Calendar MCP server",
    description: "Built a custom MCP server using FastMcp alongside google calendar/docs API to allow AI agents to access and modify google docs and calendar. Deployed for use. Wrote documentation, alongside an easy tutorial for how to deploy and use the server.",
    techStack: ["Python", "FastMCP", "Google Calendar API", "Google Docs API", "Github"],
    githubUrl: "https://github.com/Sujan30/docs-mcp-server",
    liveUrl: "https://google-docs-calendar-mcp-server.onrender.com/",
    impact: "Drove over 2,000 social media impressions. Got about 6 unique users. "
  },
  {
    id: 3,
    title: "Explain Like I'm 5 (ELI5)",
    description: "Platform that simplifies complex topics using AI to make them accessible to everyone, regardless of their background knowledge.",
    techStack: ["Flask", "OpenAI", "Python", "PythonAnywhere (Deployment)"],
    githubUrl: "https://github.com/Sujan30/Eli5",
    liveUrl: "https://sujan30.pythonanywhere.com/",
    impact: "Consistently driving over 250+ visits each month over the course of 4 months. "
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main>
        <Hero />
        
        {/* Featured Projects Section */}
        <section id="featured-projects" className="page-section bg-muted/30">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="h2 mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl">
                  A selection of my recent work. These projects showcase my skills and passion for building innovative solutions.
                </p>
              </div>
              
              <Link 
                to="/projects" 
                className="group mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-primary"
              >
                View all projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        
        <section className="page-section">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="h2 mb-6">My Resume</h2>
              <p className="text-muted-foreground mb-8">
                Check out my professional experience, skills, and educational background in detail.
              </p>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </section>
        
        <section className="page-section bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="h2 mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/about"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More About Me
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border px-6 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
