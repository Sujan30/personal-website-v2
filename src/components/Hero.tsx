import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Blue radial glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[100px]" />
      </div>

      <div className="container-custom text-center flex flex-col items-center relative z-10">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <span className="label-eyebrow">
            CS @ SJSU &nbsp;·&nbsp; Neurotech &amp; AI
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="h1 max-w-4xl mx-auto mb-6 text-white"
        >
          Building at the edge of{" "}
          <span className="text-primary">AI</span>{" "}
          and{" "}
          <span className="text-primary">neurotech</span>.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Computer science & linguistics student at SJSU. I build AI agents,
          EEG signal classifiers, and tools that ship.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 h-11 px-6 rounded bg-primary text-black text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-6 rounded border border-white/[0.1] text-sm font-semibold tracking-wide text-zinc-300 hover:border-white/30 hover:text-white transition-colors bg-white/[0.03]"
          >
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://github.com/Sujan30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
          >
            <Github className="h-4 w-4" />
            <span className="font-mono-custom text-xs tracking-wide">Sujan30</span>
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href="https://linkedin.com/in/suqjan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
          >
            <Linkedin className="h-4 w-4" />
            <span className="font-mono-custom text-xs tracking-wide">suqjan</span>
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href="mailto:sujan.nandikolsunilkumar@sjsu.edu"
            className="font-mono-custom text-xs tracking-wide text-zinc-500 hover:text-white transition-colors"
          >
            sujan.nandikolsunilkumar@sjsu.edu
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
