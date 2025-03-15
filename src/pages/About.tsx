
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = {
    languages: ["Java", "Python", "JavaScript (React)"],
    frameworks: ["SpringBoot", "Flask", "React"],
    tools: ["Maven", "Gradle", "IntelliJ", "VS Code", "Cursor"],
  };

  const passions = [
    "Neuroscience",
    "Artificial Intelligence",
    "Strength Training",
    "AI Agents",
  ];

  return (
    <PageTransition>
      <main className="pt-24">
        <section className="page-section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="h1 mb-6">About Me</h1>
              <p className="text-lg text-muted-foreground">
                Computer science & linguistics student passionate about AI, automation, and building innovative projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="h3 mb-4">My Journey</h2>
                <p className="text-muted-foreground mb-6">
                  I'm a computer science and linguistics student at San Jose State University, set to graduate in May 2027. My academic journey combines technical expertise with language understanding, allowing me to approach problems from multiple perspectives.
                </p>
                <p className="text-muted-foreground mb-6">
                  What drives me is the intersection of technology and human experience. I'm particularly interested in how AI can be leveraged to create tools that genuinely help people and solve real-world problems.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, I'm either deep-diving into neuroscience research, strength training, or working on shipping my next product.
                </p>
              </div>
              
              <div className="relative p-6 rounded-lg border bg-card">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/80 via-card to-card/80 rounded-lg" />
                <h3 className="text-xl font-semibold mb-4">Education & Timeline</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">San Jose State University</h4>
                      <p className="text-muted-foreground">BS in Computer Science & Linguistics</p>
                      <p className="text-sm text-muted-foreground">Expected Graduation: May 2027</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Independent Projects & Research</h4>
                      <p className="text-muted-foreground">Building software solutions and exploring AI applications</p>
                      <p className="text-sm text-muted-foreground">2021 - Present</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Continuous Learning</h4>
                      <p className="text-muted-foreground">Pursuing knowledge in neuroscience and AI</p>
                      <p className="text-sm text-muted-foreground">Ongoing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="page-section bg-muted/30">
          <div className="container-custom">
            <h2 className="h2 text-center mb-12">Skills & Interests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card h-full">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className="space-y-2">
                  {skills.languages.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card h-full">
                <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
                <ul className="space-y-2">
                  {skills.frameworks.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card h-full">
                <h3 className="text-xl font-semibold mb-4">Tools</h3>
                <ul className="space-y-2">
                  {skills.tools.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Passions & Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {passions.map((passion) => (
                  <div key={passion} className="p-4 rounded-md bg-muted flex items-center justify-center text-center">
                    <span>{passion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="page-section">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="h2 mb-6">Want to See My Work?</h2>
              <p className="text-muted-foreground mb-8">
                Check out my projects to see how I apply my skills and passion to create meaningful solutions.
              </p>
              
              <Link 
                to="/projects" 
                className="group inline-flex items-center justify-center rounded-md bg-primary h-11 px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Projects 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
