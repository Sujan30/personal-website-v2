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

export const projects: Project[] = [
  // --- Deployed ---
  {
    id: 7,
    title: "Internship Matcher",
    description: "Full-stack internship matching platform that ingests 1,000+ postings, parses resumes with LLMs, and ranks roles using semantic matching with caching and daily refreshes.",
    techStack: ["FastAPI", "React", "AWS EC2", "AWS S3", "Redis", "SQLite", "LLM Resume Parsing"],
    githubUrl: "https://github.com/shirinalapati/Internship-App/",
    liveUrl: "https://internshipmatcher.com",
    impact: "Drove over 10,000 impressions on LinkedIn and got over 100 active users.",
  },
  {
    id: 1,
    title: "Calgentic",
    description: "AI-powered calendar assistant that helps users manage their time more effectively by analyzing schedules and suggesting optimizations.",
    techStack: ["GPT-4o", "Google Calendar API", "TypeScript", "Shadcn UI", "Python", "Flask", "Google Auth"],
    githubUrl: "https://github.com/Sujan30/calgentic-UI",
    liveUrl: "https://calgentic.com",
    impact: "35,000+ impressions across Instagram and TikTok. ~20 monthly active users.",
  },
  {
    id: 8,
    title: "Viralize — Marketing AI Agent",
    description: "End-to-end social media content generator that researches a company website, writes targeted scripts, and produces short-form videos optimized for TikTok/Instagram.",
    techStack: ["Playwright", "LangChain", "FastAPI", "Research Agents", "Video Generation"],
    liveUrl: "https://www.linkedin.com/pulse/lindy-30-ai-hack-recap-sf-august-2025-michael-raspuzzi-oma8c/",
    impact: "Built in ~6 hours. Reduced marketing workflow from 30+ min to ~3 min. Won 2nd place (\"Coolest Build\") out of 35 teams.",
  },

  // --- Not deployed, ordered by last pushed ---
  {
    id: 10,
    title: "Cold Leads",
    description: "Automated AI outreach system for real estate agents. Texts prospects as an AI assistant, qualifies leads through natural SMS conversation, and books 30-minute calls directly into the agent's Cal.com calendar — no human in the loop until escalation is needed.",
    techStack: ["FastAPI", "PostgreSQL", "Claude Haiku/Sonnet", "Linq SMS", "Cal.com API", "SendGrid", "APScheduler", "SQLAlchemy"],
    githubUrl: "https://github.com/Sujan30/cold-leads",
    impact: "8-state lead state machine with a 6-intent classifier. Handles scheduling, time filtering, 10-second message debounce, and automatic human escalation alerts.",
  },
  {
    id: 11,
    title: "Phylogenetic Tree Comparison",
    description: "Bioinformatics study comparing UPGMA, Neighbor-Joining, and Maximum Likelihood for constructing evolutionary trees. Automatically fetches vertebrate COX1 gene sequences from NCBI GenBank, aligns them with MAFFT, and evaluates tree quality using Robinson-Foulds distance.",
    techStack: ["Python", "MAFFT", "FastTree", "NCBI GenBank", "BioPython"],
    githubUrl: "https://github.com/Sujan30/CS123A-final-project",
    impact: "Benchmarked all three algorithms across 15–150 sequences. Written to be accessible to non-programmer bioinformaticians.",
  },
  {
    id: 9,
    title: "Sleep-PSG Scoring",
    description: "Research-grade EEG sleep stage classifier that takes raw EDF files through a preprocessing pipeline (filtered epochs → NPZ artifacts with checksums), trains LDA and RandomForest models, and streams real-time predictions over WebSocket — auto-assembling 250-sample chunks into 30-second epochs with confidence scores and latency metrics.",
    techStack: ["FastAPI", "ARQ", "Redis", "WebSocket", "Docker", "LDA", "RandomForest"],
    githubUrl: "https://github.com/Sujan30/bci-project",
    impact: "Fault-tolerant ARQ worker queue with Redis fallback. Full observability: health checks, structured JSON logging, per-request X-Request-ID tracing. 53.6% balanced accuracy on 8,281 epochs (3 nights of data).",
  },
  {
    id: 2,
    title: "Google Docs & Calendar MCP Server",
    description: "Custom MCP server using FastMCP alongside the Google Calendar and Docs APIs, letting AI agents read and modify documents and calendar events. Shipped with docs and a deployment tutorial.",
    techStack: ["Python", "FastMCP", "Google Calendar API", "Google Docs API"],
    githubUrl: "https://github.com/Sujan30/docs-mcp-server",
    impact: "2,000+ social media impressions. ~6 unique external users.",
  },
  {
    id: 6,
    title: "Canvas AI Agent",
    description: "Tool that accesses Canvas assignments, checks student drafts against rubrics, and uses Browseruse + Gemini to detect AI-generated content via Quillbot — simulating a teacher grading session.",
    techStack: ["Python", "Playwright", "Browseruse", "GPT-4o", "Gemini 2.0 Flash"],
    githubUrl: "https://github.com/Sujan30/canvas-ai-agent",
    impact: "5,000+ TikTok impressions. Not deployed due to Canvas policy constraints.",
  },
  {
    id: 3,
    title: "Explain Like I'm 5 (ELI5)",
    description: "Platform that simplifies complex topics using AI to make them accessible regardless of background knowledge.",
    techStack: ["Flask", "OpenAI", "Python"],
    githubUrl: "https://github.com/Sujan30/Eli5",
    impact: "250+ visits per month sustained over 4 months.",
  },
  {
    id: 4,
    title: "Twitter Bot for ELI5",
    description: "Automated Twitter bot that shared ELI5 content to grow platform reach. Lived a memorable 2-month run before getting banned.",
    techStack: ["Flask", "Tweepy", "Python"],
    githubUrl: "https://github.com/Sujan30/Eli5",
    impact: "800+ impressions before the ban. A cautionary tale in rate-limit respect.",
  },
];
