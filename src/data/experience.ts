export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  highlights: string[];
  url?: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: "IDEAS at SJSU",
    url: "https://ideaswebsite.vercel.app/",
    role: "Director of Web Development",
    location: "San Jose, CA",
    dates: "August 2025 – Present",
    highlights: [
      "Led a 6-person team of CS students to design, build, and deploy the IDEAS at SJSU organization website end-to-end, owning the full lifecycle from Figma mockups to React production deployment on Vercel.",
      "Coached teammates new to web development on Git workflows, React fundamentals, and code review practices via weekly Monday standups, unblocking frontend, backend, and UI/UX subteams.",
    ],
  },
  {
    company: "Burnt (YC S25)",
    url: "https://www.getburnt.ai/",
    role: "Full Stack Developer Intern",
    location: "San Jose, CA",
    dates: "July 2025 - September 2025",
    highlights: [
      "Developed a custom B2B ticketing interface saving the internal team 5+ minutes per support request and added automatic logging.",
      "Used AWS S3 to store 250+ customer ticket attachments (screenshots, screen recordings, voice memos).",
      "Integrated with Intercom API to automate ticket creation, improving internal team efficiency for 50+ customers.",
      "Built a manual sales order flow UI that saved customers 3+ minutes by automatically logging orders into an ERP.",
    ],
  },
  {
    company: "SJSU College of Engineering",
    url: "https://sce.sjsu.edu/",
    role: "Software Engineering Intern",
    location: "San Jose, CA",
    dates: "June 2025 - August 2025",
    highlights: [
      "Built a Python wrapper using Grafanalib for server performance monitoring dashboards, reducing codebase by 83% vs. manual time-series configuration.",
      "Reduced dashboard definitions from 30+ lines each to ~5 lines by creating a reusable dashboard generation wrapper.",
      "Migrated 7+ dashboards from legacy redundant code to the new wrapper-based approach.",
    ],
  },
  {
    company: "SJSU Software & Computer Engineering Society",
    url: "https://sce.sjsu.edu/",
    role: "Software Engineering Intern",
    location: "San Jose, CA",
    dates: "Feb 2025 – Present",
    highlights: [
      "Built an end-to-end review feature for 30,000+ students to submit professor ratings using React.",
      "Co-developed a platform that saved students 15+ minutes during class registration by simplifying access to professor reviews for each course (React, Tailwind, Node.js, Drizzle).",
      "Helped integrate user-generated reviews with existing course data sourced from a GraphQL + Python web-scraper pipeline.",
    ],
  },
];

