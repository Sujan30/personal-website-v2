import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectCard, { Project } from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "@/data/experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const featuredProjects: Project[] = [
  {
    id: 7,
    title: "Internship Matcher",
    description: "Full-stack matching platform that scrapes 1,000+ internship postings, parses resumes with LLMs, and semantically ranks roles — preventing keyword mismatch issues.",
    techStack: ["FastAPI", "React", "AWS EC2", "AWS S3", "Redis", "Claude API"],
    liveUrl: "https://internshipmatcher.com",
    githubUrl: "https://github.com/shirinalapati/Internship-App/",
    impact: "90% faster data retrieval via caching. 52% faster match time with parallel LLM processing.",
  },
  {
    id: 1,
    title: "Calgentic",
    description: "AI-powered calendar assistant that helps users manage their time more effectively by analyzing schedules and suggesting optimizations.",
    techStack: ["GPT-4o", "Google Calendar API", "Typescript", "Shadcn UI", "Python", "Flask", "Google Auth"],
    githubUrl: "https://github.com/Sujan30/calgentic-UI",
    liveUrl: "https://calgentic.com",
    impact: "35,000+ impressions across Instagram and TikTok. ~20 monthly users.",
  },
  {
    id: 9,
    title: "Sleep-PSG Scoring",
    description: "Automated polysomnography scoring platform that classifies EEG sleep stages using signal processing and ML — from raw EDF files to live hypnogram visualization.",
    techStack: ["FastAPI", "MNE-Python", "React", "Redis", "Scikit-Learn", "WebSocket"],
    githubUrl: "https://github.com/Sujan30/sleep-psg",
    impact: "98% reduction in annotation time (2+ hrs → <2 min). 83% balanced accuracy across sleep stages.",
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

        {/* Experience Section */}
        <section id="experience" className="page-section border-t border-white/[0.05]">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <p className="label-eyebrow mb-3">Experience</p>
                <h2 className="h2 text-white">Where I've worked</h2>
              </div>
              <Link
                to="/experience"
                className="group mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500 hover:text-white transition-colors"
              >
                Full history
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="max-w-3xl">
              <ExperienceTimeline items={experiences.slice(0, 3)} variant="compact" />
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="featured-projects" className="page-section border-t border-white/[0.05]">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <p className="label-eyebrow mb-3">Featured Projects</p>
                <h2 className="h2 text-white">What I've built</h2>
              </div>
              <Link
                to="/projects"
                className="group mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500 hover:text-white transition-colors"
              >
                All projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="page-section border-t border-white/[0.05]">
          <div className="container-custom">
            <div className="max-w-2xl">
              <p className="label-eyebrow mb-4">Get in touch</p>
              <h2 className="h2 text-white mb-6">
                Open to internships and<br />interesting problems.
              </h2>
              <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                Especially in neurotech, AI infrastructure, or anything that pushes how humans and machines interact.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:sujan.nandikolsunilkumar@sjsu.edu"
                  className="inline-flex items-center justify-center h-11 px-6 rounded bg-primary text-black text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Send me an email
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center h-11 px-6 rounded border border-white/[0.1] text-sm font-semibold text-zinc-300 hover:border-white/30 hover:text-white transition-colors bg-white/[0.02]"
                >
                  More about me
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
