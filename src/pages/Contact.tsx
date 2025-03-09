
import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import SocialLinks from "@/components/SocialLinks";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      setMessage("");
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <PageTransition>
      <main className="pt-24">
        <section className="page-section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="h1 mb-6">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have a question or want to work together? Feel free to reach out.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="p-6 rounded-lg border bg-card">
                <h2 className="h3 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-medium mb-2">Email</h3>
                    <a 
                      href="mailto:sujan.nandikolsunilkumar@sjsu.edu" 
                      className="text-primary hover:underline"
                    >
                      sujan.nandikolsunilkumar@sjsu.edu
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-2">Location</h3>
                    <p className="text-muted-foreground">San Jose, California</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-2">Connect</h3>
                    <SocialLinks />
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Let me know how I can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
                
                <div className="mt-8 p-4 rounded-md bg-muted">
                  <p className="text-sm text-muted-foreground">
                    Prefer direct contact? Feel free to email me directly at{" "}
                    <a 
                      href="mailto:sujan.nandikolsunilkumar@sjsu.edu" 
                      className="text-primary hover:underline"
                    >
                      sujan.nandikolsunilkumar@sjsu.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
