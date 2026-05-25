export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <p className="mb-4 text-xs font-semibold tracking-widest uppercase text-accent lg:hidden">
        About
      </p>

      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          I'm a rising senior CS student at{' '}
          <span className="text-foreground font-medium">San José State University</span>{' '}
          with a passion to bring AI solutions to Businesses for time and cost savings. My most recent
          Project, {''}<span className="text-foreground font-medium">Cold Leads</span>{' '} is an AI solution aimed for Real Estate Agents to easily follow up with 
          their leads via an AI agent that communicates to their leads via iMessage. 
        </p>
        <p>
          Outside of building AI solutions for Businesses, I like attending hackathons and building things, lifting weights,
          and a matcha connoisseur. During my free time, I like to intertwine my hobbies with AI and create dumb things like:
        </p>

        <div className="space-y-4 pl-4 border-l border-accent/40">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent/70 -mb-1">
            Personal Projects
          </p>
          <div>
            <p className="text-foreground font-medium">Health-Coach</p>
            <p className="mt-2">
              An AI agent that runs via a remote claude session, synced with your email, whoop data. So you can track your macros and calories. And when you slack, it scans your email to see if you ordered something sus on doordash at 3am that you're ashmaed of sharing. Creates interactive dashboards so you can track your progress!
            </p>
          </div>

          <div>
            <p className="text-foreground font-medium">Break-UP</p>
            <p className="mt-2">
              A native expo IOS app (still in beta) that is intended to help people like me who freshly got out of a break up.
            </p>
            <p className="mt-1 mb-2 text-[13px] text-muted-foreground/60 uppercase tracking-widest font-semibold">How it works</p>
            <ul className="space-y-1.5">
              {[
                'You upload all your memories of your ex — from photos, texts, voice memos',
                'We store all of that locally on your device',
                'Use Supabase edge functions to process & embed your memories using pgvector',
                'Share some goals that you want to hit -- hitting the gym, coding, touching grass, etc.',
                'Use all of that data to serve you memories of your ex and a notification to motivate you to your goals!',
                'A streak tracker to track your goals such as going to the gym, reading, coding, etc.',
              ].map((step, i) => (
                <li key={i} className="flex gap-2 text-[13px] leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          I've interned at{' '}
          <span className="text-foreground font-medium">Burnt (YC S25)</span>, built
          tooling for the SJSU College of Engineering, and co-developed a professor-review
          platform used by 30,000+ students. I'm always looking for the next interesting
          problem.
        </p>
        <p className="text-foreground">
          Currently:{' '}
          <span className="text-accent">
            working on cold-leads, BreakUP.
          </span>
        </p>
      </div>
    </section>
  );
}
