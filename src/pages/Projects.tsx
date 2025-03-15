
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: 5,
    title: "Instagram Ratio Fixer",
    description: "Analyzes Instagram follow ratios using custom algorithms and provides optimization recommendations for account growth.",
    techStack: ["Java", "Insta4j", "REST API"],
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Calgentic",
    description: "AI-powered calendar assistant that helps users manage their time more effectively by analyzing schedules and suggesting optimizations.",
    techStack: ["GPT-4o", "Google Calendar API", "Typescript", "Shadcn UI", "Python", "Flask", "Google Auth", "Render (for deployment)"],
    githubUrl: "https://github.com/Sujan30/calgentic-UI",
    liveUrl: "https://calgentic.com",
  },
  {
    id: 3,
    title: "Explain Like I'm 5 (ELI5)",
    description: "Platform that simplifies complex topics using AI to make them accessible to everyone, regardless of their background knowledge.",
    techStack: ["Flask", "OpenAI", "Python"],
    githubUrl: "https://github.com/Sujan30/Eli5",
    liveUrl: "https://sujan30.pythonanywhere.com/",
  },
  {
    id: 4,
    title: "Twitter Bot for ELI5 (DEPRECATED, NEW BOT IS BELOW)",
    description: "Automated Twitter bot that shares content from the ELI5 platform, increasing reach and engagement with simplified explanations.",
    techStack: ["Flask", "Tweepy", "Python"],
    githubUrl: "https://github.com/Sujan30/Eli5",
  },
  {
    id: 1,
    title: "Twitter Bot for Naval Ravikant Quotes",
    description: "Automated Twitter bot that shares famous Naval Ravikant quotes from the Naval Ravikant API, increasing reach and engagement.",
    techStack: ["Javascript", "X API", "Node js","Node-cron", "Railway"],
    githubUrl: "https://github.com/Sujan30/Naval-Wisdom-Bot",
    liveUrl: "https://x.com/navals_wisdom",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="pt-24">
        <section className="page-section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="h1 mb-6">My Projects</h1>
              <p className="text-lg text-muted-foreground">
                A collection of my work showcasing my skills in software development, AI, and problem-solving. Each project represents a unique challenge and solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="page-section bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-6">Want to Work Together?</h2>
              <p className="text-muted-foreground mb-8">
                I'm always looking for new challenges and opportunities to collaborate on interesting projects.
              </p>
              <a 
                href="/contact" 
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Projects;
