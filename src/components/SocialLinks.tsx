
import { Github, Linkedin, Twitter } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sujan30",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suqjan",
      icon: Linkedin,
    },
    {
      name: "X (formerly Twitter)",
      url: "https://x.com/spottingevs",
      icon: Twitter,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-muted hover:text-primary hover:border-primary"
          aria-label={social.name}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
