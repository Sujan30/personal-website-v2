export type ProjectDisplay =
  | { type: 'hero'; metric: string; metricLabel: string; subStat?: string }
  | { type: 'sidebar'; stats: { value: string; label: string }[] }
  | { type: 'scoreboard'; stats: { value: string; label: string }[] }
  | { type: 'transform'; before: string; after: string; caption: string; subStats?: { value: string; label: string }[] }
  | { type: 'simple' };

export type ProjectStatus = 'shipped' | 'hackathon' | 'archived' | 'wip';

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  display: ProjectDisplay;
  status?: ProjectStatus;
  featured: boolean;
};

export const projects: Project[] = [
  // ── Featured ────────────────────────────────────────────────────────────────
  {
    slug: 'internship-matcher',
    title: 'Internship Matcher',
    year: '2024 → now',
    description:
      'Full-stack platform that scrapes 1,000+ internship postings, parses resumes with LLMs, and semantically ranks roles — preventing keyword mismatch rejections.',
    tags: ['FastAPI', 'React', 'AWS EC2', 'Redis', 'Claude API'],
    github: 'https://github.com/shirinalapati/Internship-App/',
    live: 'https://internshipmatcher.com',
    display: {
      type: 'scoreboard',
      stats: [
        { value: '1k+', label: 'Postings indexed' },
        { value: '90%', label: 'Faster retrieval via cache' },
        { value: '52%', label: 'Faster match, parallel LLM' },
        { value: '100+', label: 'Active users' },
      ],
    },
    status: 'shipped',
    featured: true,
  },
  {
    slug: 'calgentic',
    title: 'Calgentic',
    year: '2024 · shipped',
    description:
      'AI-powered calendar assistant that analyzes schedules and suggests optimizations. Drove organic distribution across short-form video before flipping to product growth.',
    tags: ['GPT-4o', 'Google Calendar', 'TypeScript', 'Flask'],
    github: 'https://github.com/Sujan30/calgentic-UI',
    live: 'https://calgentic.com',
    display: {
      type: 'sidebar',
      stats: [
        { value: '35k', label: 'Impressions — TikTok + IG' },
        { value: '~20', label: 'Monthly active users' },
        { value: '100%', label: 'Solo built + shipped' },
      ],
    },
    status: 'shipped',
    featured: true,
  },
  {
    slug: 'viralize',
    title: 'Viralize',
    year: '2024 · hackathon',
    description:
      'Marketing AI agent that researches a company website, writes targeted scripts, and produces short-form videos optimized for TikTok/Instagram.',
    tags: ['Playwright', 'LangChain', 'FastAPI', 'Research Agents'],
    live: 'https://www.linkedin.com/pulse/lindy-30-ai-hack-recap-sf-august-2025-michael-raspuzzi-oma8c/',
    display: {
      type: 'transform',
      before: '30+ min',
      after: '~3 min',
      caption: 'marketing workflow, end to end',
      subStats: [
        { value: '6h', label: 'Build time' },
        { value: '2nd', label: 'of 35 teams' },
      ],
    },
    status: 'hackathon',
    featured: true,
  },
  {
    slug: 'cold-leads',
    title: 'Cold Leads',
    year: '2025 → now',
    description:
      'AI outreach system for real estate agents. Texts prospects via SMS, qualifies leads through natural conversation, and books 30-minute calls into Cal.com — no human in the loop until escalation.',
    tags: ['FastAPI', 'PostgreSQL', 'Claude', 'Linq SMS', 'Cal.com', 'APScheduler'],
    github: 'https://github.com/Sujan30/cold-leads',
    display: {
      type: 'scoreboard',
      stats: [
        { value: '8', label: 'States in machine' },
        { value: '6', label: 'Intent types classified' },
        { value: '30min', label: 'Auto-booked calls' },
        { value: '0', label: 'Humans needed until escalation' },
      ],
    },
    status: 'wip',
    featured: true,
  },
  {
    slug: 'sleep-psg',
    title: 'Sleep-PSG Scoring',
    year: '2025 · research',
    description:
      'Research-grade EEG sleep stage classifier. Preprocesses raw EDF files into NPZ artifacts, trains LDA and RandomForest models, and streams real-time predictions over WebSocket — 250-sample chunks auto-assembled into 30-second epochs with confidence scores.',
    tags: ['FastAPI', 'ARQ', 'Redis', 'WebSocket', 'Docker', 'LDA', 'RandomForest'],
    github: 'https://github.com/Sujan30/bci-project',
    display: {
      type: 'hero',
      metric: '98%',
      metricLabel:
        'reduction in annotation time — from 2+ hours of manual scoring to under 2 minutes per recording.',
      subStat: '53.6% balanced accuracy on 8,281 epochs (3 nights of data)',
    },
    status: 'shipped',
    featured: true,
  },
  {
    slug: 'sjsu-dashboards',
    title: 'SJSU Engineering Dashboards',
    year: '2025 · internship',
    description:
      'Python wrapper around Grafanalib for server performance monitoring. Replaced verbose manual time-series configs with a reusable dashboard generator — migrated 7+ dashboards.',
    tags: ['Python', 'Grafanalib', 'Time-series'],
    github: 'https://github.com/Sujan30/python-dashboard-for-sce',
    display: {
      type: 'transform',
      before: '30+ lines',
      after: '~5 lines',
      caption: 'per dashboard definition',
      subStats: [{ value: '83%', label: 'Codebase reduction' }],
    },
    status: 'shipped',
    featured: true,
  },

  // ── Archive ──────────────────────────────────────────────────────────────────
  {
    slug: 'phylogenetic-tree',
    title: 'Phylogenetic Tree Comparison',
    year: '2026 · coursework',
    description:
      'Bioinformatics study comparing UPGMA, Neighbor-Joining, and Maximum Likelihood for evolutionary trees. Fetches vertebrate COX1 sequences from NCBI GenBank, aligns with MAFFT, evaluates using Robinson-Foulds distance.',
    tags: ['Python', 'MAFFT', 'FastTree', 'NCBI GenBank', 'BioPython'],
    github: 'https://github.com/Sujan30/CS123A-final-project',
    display: { type: 'simple' },
    status: 'shipped',
    featured: false,
  },
  {
    slug: 'docs-mcp',
    title: 'Google Docs & Calendar MCP Server',
    year: '2025',
    description:
      'Custom MCP server using FastMCP + Google APIs. Lets AI agents read and modify Docs and Calendar events. Published with docs and a deployment tutorial.',
    tags: ['Python', 'FastMCP', 'Google APIs'],
    github: 'https://github.com/Sujan30/docs-mcp-server',
    display: { type: 'simple' },
    status: 'shipped',
    featured: false,
  },
  {
    slug: 'canvas-agent',
    title: 'Canvas AI Agent',
    year: '2025',
    description:
      'Accesses Canvas assignments, checks drafts against rubrics, and uses Browseruse + Gemini to detect AI-generated content via Quillbot — simulating a teacher grading session.',
    tags: ['Python', 'Playwright', 'Browseruse', 'GPT-4o', 'Gemini 2.0 Flash'],
    github: 'https://github.com/Sujan30/canvas-ai-agent',
    display: { type: 'simple' },
    status: 'archived',
    featured: false,
  },
  {
    slug: 'eli5',
    title: 'Explain Like I\'m 5',
    year: '2024',
    description:
      'Platform that simplifies complex topics using AI to make them accessible regardless of background knowledge. 250+ visits/month over 4 months.',
    tags: ['Flask', 'OpenAI', 'Python'],
    github: 'https://github.com/Sujan30/Eli5',
    display: { type: 'simple' },
    status: 'archived',
    featured: false,
  },
  {
    slug: 'eli5-bot',
    title: 'Twitter Bot for ELI5',
    year: '2024',
    description:
      'Automated Twitter bot that shared ELI5 content to grow platform reach. Lived a memorable 2-month run before getting banned. A cautionary tale in rate-limit respect.',
    tags: ['Flask', 'Tweepy', 'Python'],
    github: 'https://github.com/Sujan30/Eli5',
    display: { type: 'simple' },
    status: 'archived',
    featured: false,
  },
];
