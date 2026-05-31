import React from "react";

export default function Experience() {
  const experiences = [
    {
      period: "March 2025 — Present",
      role: "UI / UX Developer (Freelance)",
      company: "Self Employed",
      description:
        "Collaborating with Antly Logistics as a Freelance UI/UX Developer, delivering responsive web solutions and improving user experiences. Simultaneously pursuing continuous learning in React.js, modern JavaScript, and advanced frontend technologies to expand my expertise and build scalable web applications.",
      technologies: ["Html5", "Css3", "React Js", "Typescript","Node Js", "Next JS", "Tailwind CSS", "Photoshop", "JQuery","Figma", ".net CMS", "Responsive Design"],
      workmode: "Remote",
      current: true,
    },
    {
      period: "Oct 2021 — Oct 2024",
      role: "UI Developer",
      company: "Mindrops Solutions (worked for client site > eRevmax Technologies) ",
      description:
        "Worked in the hospitality and travel industry as a Booking Engine, Automation, Designer, and Developer within the Marketing and IT departments, Created many websites using WordPress and its Elementor Plugin.",
      technologies: ["Html5", "Css3", "Bootstrap", "React Js", "Tailwind CSS", "Wordpress", "Elementor", "Adobe XD", "Figma", "Responsive Design"],
      workmode: "Remote",
      current: false,
    },
    {
      period: "Sep 2019 — Sep 2021",
      role: "Web Developer",
      company: "Aquevix Solutions",
      description:
        "Developed warehouse management system (kuberwms) using React.js and Bootstrap, Adopted modern frontend technologies including Tailwind CSS, React.js, Git, and Adobe XD to improve development efficiency.",
      technologies: ["Html5", "Css3", "React Js", "Bootstrap", "Tailwind CSS", "JavaScript", "JQuery", "Adobe XD", "Responsive Design"],
      workmode: "Remote",
      current: false,
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((expvalue, expidx) => {
              const isEven = expidx % 2 === 0;
              return (
                <div className="relative grid md:grid-cols-2 gap-8 animate-fade-in" key={expidx}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  </div>

                  {/* Content */}
                  <div className={`pl-8 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                      <div className="relative">
                        <span className="text-sm text-primary font-medium">
                          {expvalue.period}
                          <span
                            className={`px-3 py-1 bg-surface text-xs rounded-full text-primary absolute ${isEven ? "left-0" : "right-0"}   `}
                          >
                            {expvalue.workmode}
                          </span>
                        </span>
                        <h3 className="text-xl font-semibold mt-2">{expvalue.role}</h3>
                        <p className="text-muted-foreground">{expvalue.company}</p>
                        <p className="text-sm text-muted-foreground mt-4">{expvalue.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {expvalue.technologies.map((techvalue, techindx) => {
                            return (
                              <span key={techindx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                                {techvalue}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
