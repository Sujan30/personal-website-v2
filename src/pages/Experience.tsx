import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { experiences } from "@/data/experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="pt-24">
        <section className="page-section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="h1 mb-6">Experience</h1>
              <p className="text-lg text-muted-foreground">
                A snapshot of the teams I’ve worked with and the impact I’ve shipped.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ExperienceTimeline items={experiences} variant="full" />
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Experience;

