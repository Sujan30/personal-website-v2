import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectCard, { Project } from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, FileText, Twitter, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Instagram Ratio Fixer",
    description: "Analyzes and optimizes Instagram follow ratios using custom algorithms.",
    techStack: ["Java", "Insta4j", "REST API"],
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Calgentic",
    description: "AI-powered calendar assistant that helps users manage their time more effectively.",
    techStack: ["GPT-4o", "Google Calendar API", "JavaScript"],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Explain Like I'm 5 (ELI5)",
    description: "Platform that simplifies complex topics using AI to make them accessible to everyone.",
    techStack: ["Flask", "OpenAI", "Python"],
    githubUrl: "https://github.com",
    liveUrl: "https://eli5.example.com",
  },
];

// Updated projects data
const aiProjects = [
  {
    id: 1,
    title: "Naval Ravikant Bot",
    description: "AI-powered Twitter bot that shares wisdom and insights in the style of Naval Ravikant, focusing on wealth, happiness, and philosophy.",
    url: "https://twitter.com/navals_wisdom",
    techStack: ["Twitter API", "GPT-4", "Python"],
    isTwitter: true
  },
  {
    id: 2,
    title: "Calgentic",
    description: "AI-powered calendar assistant that helps users manage their time more effectively through intelligent scheduling and optimization.",
    url: "https://calgentic.com",
    techStack: ["GPT-4o", "Google Calendar API", "JavaScript"],
    isTwitter: false
  },
  {
    id: 3,
    title: "Explain Like I'm 5 (ELI5)",
    description: "Platform that simplifies complex topics using AI to make them accessible to everyone, regardless of their background knowledge.",
    url: "https://sujan30.pythonanywhere.com/",
    techStack: ["Flask", "OpenAI", "Python"],
    isTwitter: false
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
        
        {/* AI Projects Section */}
        <section id="ai-projects" className="page-section">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="h2 mb-4">AI Projects</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Innovative AI-powered applications and platforms I've developed to solve real-world problems.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiProjects.map((project, index) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md">
                  <div className="mb-4 flex items-center">
                    {project.isTwitter ? (
                      <Twitter className="h-5 w-5 mr-2 text-[#1DA1F2]" />
                    ) : (
                      <Globe className="h-5 w-5 mr-2 text-primary" />
                    )}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium ${project.isTwitter ? 'text-[#1DA1F2]' : 'text-primary'}`}
                    >
                      {project.isTwitter ? 'Follow on Twitter' : 'Visit Website'}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
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
