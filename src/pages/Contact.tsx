
import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import SocialLinks from "@/components/SocialLinks";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  

  return (
    <PageTransition>
      <main className="min-h-screen">
        <section className="min-h-screen flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="h1 mb-6">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have a question or want to work together? Feel free to reach out.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card w-full text-center">
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
              </div>
            </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
