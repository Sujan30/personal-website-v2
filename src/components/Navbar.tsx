import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume.pdf", isExternal: true },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-lg tracking-tight text-white hover:text-primary transition-colors"
        >
          sujan.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-xs font-semibold tracking-[0.15em] uppercase transition-colors",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            )
          )}

          {/* CTA button */}
          <a
            href="mailto:sujan.nandikolsunilkumar@sjsu.edu"
            className="inline-flex items-center justify-center h-8 px-4 rounded text-xs font-semibold tracking-[0.1em] uppercase bg-primary text-black hover:bg-primary/90 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/[0.06]">
          <nav className="container-custom py-5 flex flex-col gap-5">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-xs font-semibold tracking-[0.15em] uppercase transition-colors",
                    location.pathname === item.path ? "text-primary" : "text-zinc-400"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
