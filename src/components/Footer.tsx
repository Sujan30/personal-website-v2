import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link to="/" className="text-base font-bold text-white hover:text-primary transition-colors">
              sujan.
            </Link>
            <p className="mt-1 text-xs text-zinc-600 font-mono-custom">
              CS @ SJSU · Neurotech & AI
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: "Projects", to: "/projects" },
              { label: "Experience", to: "/experience" },
              { label: "About", to: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-600 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sujan30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/suqjan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="text-xs text-zinc-700 font-mono-custom">
              © {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
