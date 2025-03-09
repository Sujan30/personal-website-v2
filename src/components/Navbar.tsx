import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { 
      name: "Resume", 
      path: "/resume.pdf",
      icon: <FileText className="h-4 w-4 mr-1" />, 
      isExternal: true 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-semibold text-xl relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
        >
          Sujan.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full flex items-center text-muted-foreground"
              >
                {item.icon}
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                  location.pathname === item.path
                    ? "text-primary after:w-full"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium py-2 transition-colors hover:text-primary text-muted-foreground flex items-center"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-base font-medium py-2 transition-colors hover:text-primary",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
