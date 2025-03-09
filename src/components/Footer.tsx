
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-xl font-semibold">
              Sujan.
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Building innovative solutions with code.
            </p>
          </div>

          <SocialLinks />

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Sujan Nandikol Sunilkumar. All rights reserved.
            </p>
            <div className="mt-1 flex items-center space-x-4">
              <Link 
                to="/projects" 
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                className="text-xs text-muted-foreground hover:text-primary"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
