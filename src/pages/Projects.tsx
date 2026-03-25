import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import ProjectCard, { Project } from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const projects: Project[] = [
  {
    id: 7,
    title: "Internship Matcher",
    description: "Full-stack internship matching platform that ingests 1,000+ postings, parses resumes with LLMs, and ranks roles using semantic matching with caching and daily refreshes.",
    techStack: ["FastAPI", "React", "AWS EC2", "AWS S3", "Redis", "SQLite", "LLM Resume Parsing"],
    githubUrl: "https://github.com/shirinalapati/Internship-App/",
    liveUrl: "https://internshipmatcher.com",
    impact: "Drove over 10,000 impressions on LinkedIn and got over a 100 active users."
  },
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
    id: 9,
    title: "Sleep-PSG Scoring",
    description: "Automated polysomnography scoring platform that classifies EEG sleep stages using signal processing and ML — from raw EDF files to live hypnogram visualization.",
    techStack: ["FastAPI", "MNE-Python", "React", "Redis", "Scikit-Learn", "WebSocket"],
    githubUrl: "https://github.com/Sujan30/sleep-psg",
    impact: "98% reduction in annotation time (2+ hrs → <2 min). 83% balanced accuracy across sleep stages.",
  },
  {
    id: 8,
    title: "Viralize - Marketing AI Agent",
    description: "End-to-end social media content generator that researches a company website, writes targeted scripts, and produces short-form videos optimized for TikTok/Instagram.",
    techStack: ["Playwright", "LangChain", "FastAPI", "Research Agents", "Video Generation"],
    liveUrl: "https://www.linkedin.com/pulse/lindy-30-ai-hack-recap-sf-august-2025-michael-raspuzzi-oma8c/",
    impact: "Built in ~6 hours; reduced marketing workflow from ~30+ minutes to ~3 minutes. Won 2nd place (\"Coolest Build\") out of 35 teams at a hackathon."

  },
  {
    id: 2,
    title: "Google Docs & Calendar MCP server",
    description: "Built a custom MCP server using FastMcp alongside google calendar/docs API to allow AI agents to access and modify google docs and calendar. Deployed for use. Wrote documentation, alongside an easy tutorial for how to deploy and use the server.",
    techStack: ["Python", "FastMCP", "Google Calendar API", "Google Docs API", "Github "],
    githubUrl: "https://github.com/Sujan30/docs-mcp-server",
    impact: "Drove over 2,000 social media impressions. Got about 6 unique users. "
  },
  {
    id: 3,
    title: "Explain Like I'm 5 (ELI5) [REDACTED]",
    description: "Platform that simplifies complex topics using AI to make them accessible to everyone, regardless of their background knowledge.",
    techStack: ["Flask", "OpenAI", "Python"],
    githubUrl: "https://github.com/Sujan30/Eli5",
    impact: "Consistently driving over 250+ visits each month over the course of 4 months. "
  },
  {
    id: 4,
    title: "Twitter Bot for ELI5 [GOT BANNED]",
    description: "Automated Twitter bot that shares content from the ELI5 platform, increasing reach and engagement with simplified explanations.",
    techStack: ["Flask", "Tweepy", "Python"],
    githubUrl: "https://github.com/Sujan30/Eli5",
    impact: "The infamous ELI5 bot, lived a solid 2 months, gaining over 800 impressions. Went a little out of control, so it had to be shut down :/"
  },
  {
    id: 5,
    title: "Twitter Bot for Naval Ravikant Quotes (DEPRECATED, NEW BOT IS BELOW)",
    description: "Automated Twitter bot that shares famous Naval Ravikant quotes from the Naval Ravikant API, increasing reach and engagement.",
    techStack: ["Javascript", "X API", "Node js","Node-cron", "Railway"],
    githubUrl: "https://github.com/Sujan30/Naval-Wisdom-Bot",
    liveUrl: "https://x.com/navals_wisdom",
    impact: "Drove over 1000 X impressions! This bot is now deprecated, rest in peace, Navals Wisdom :/"
  },
  {
    id: 6,
    title: "Canvas AI Agent (NOT DEPLOYED DUE TO CANVAS  POLICIES)",
    description: "Built a tool that accesses your canvas account, gets assignment details. Uses assignment details as instructions for the first agent to check the users draft against the rubric. There is a second agent that takes the users draft, and using browseruse and gemini-2.0-flash it access playwright browser and navigates to quillbots AI detector to check if the students work was done by AI. The intended use of this project is to simulate a teacher grading the students assignment, to ensure that students can get the highest grade possible for assignments. ",
    techStack: ["Python", "Playwright", "AI Agent","Browseruse", "GPT-4o", "Gemini-2.0-Flash"],
    githubUrl: "https://github.com/Sujan30/canvas-ai-agent",
    impact: "Project was never deployed, but got over 5,000 impressions on Tik Tok!"
  }
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
              <Link 
                to="/contact"
                className="group mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-primary"
                >
                  Let's Talk
                </Link>
                
              
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Projects;
