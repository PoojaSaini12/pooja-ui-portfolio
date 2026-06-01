import React from "react";
import heroBg from "../images/hero-bg.jpg";
import myPic from "../images/mypic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Socialicons} from "../Constants/socialIcons"
import {
  faArrowRight,
  faDownload,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";


const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  const mySkills = [
    "HTML5",
    "CSS3",
    "JavaScript ",
    "jQuery",
    "React.js ",
    "Vite React.js ",
    "REST APIs",
    "NPM",
    "Bootstrap",
    "Tailwind CSS",
    "Flexbox",
    "Grid",
    "BEM",
    "Responsive Desig",
    "CSS Clamp()",
    "SASS/LESS",
    "WordPress",
    "Elementor",
    "Wix",
    "Git",
    "GitHub",
    "Netlify",
    "CI/CD Pipelines",
    "Browser Stack",
    "Cross-browser testing",
    "WCAG standards",
    "ChatGPT",
    "GitHub Copilot",
  ];


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend / UI Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Shaping{" "}
                <span className="text-primary glow-text">intuitive</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  perfection.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Pooja Saini — passionate about designing and developing
                meaningful digital experiences. I blend creativity with code to
                build user-friendly and impactful web applications that users
                love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                href={`${BASE}#contact`}
                className="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 py-4 text-lg "
              >
                <span className="relative flex items-center justify-center gap-2">
                  Contact Me <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
              <a
                target="_blank"
                href={`${import.meta.env.BASE_URL}Pooja-Saini-UI-UX-Developer.pdf`}
                className="relative bg-transparent border border-border 
        text-foreground hover:border-primary/50 transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 text-lg font-medium rounded-full overflow-visible 
        animated-border"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {Socialicons.map((iconv, idxs) => {
                return (
                  <a
                    key={idxs}
                    href={iconv.href}
                    target='_blank'
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <FontAwesomeIcon className="w-5 h-5" icon={iconv.icon} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Profile Image */}

          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              ></div>

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={myPic}
                  alt="Pedro Machado"
                  className="w-full brightness-80 aspect-[4/5] object-cover rounded-2xl"
                />
              </div>

              {/* Floating Badge */}

              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Stats Badge */}

              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary text-center">9.5</div>
                <div className="text-xs text-muted-foreground text-center">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

            <div className="flex animate-marquee">
              {[...mySkills, ...mySkills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <span className="w-6 h-6 animate-bounce">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </a>
      </div>
    </section>
  );
}
