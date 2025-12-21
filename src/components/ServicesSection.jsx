import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Dnote from "../assets/images/Dnote_final.png";
import GIFinder from "../assets/images/GIFinder.png";
import healthfactfinder from "../assets/images/healthfactfinder.png"
import studyspark from "../assets/images/studyspark.png"
import taskflow from "../assets/images/taskflow.png"
import trackr from "../assets/images/trackr.jpeg"
export default function ServicesSection() {
  const services = [
    {
      title: "Dnote",
      description: "Software Developer Intern",
      duration: "June 2025 – Aug 2025",
      content:
        " Engineered low-latency Supabase backends and interactive React mind-maps with Grok AI automation, optimizing system performance via query tuning and CI/CD. ",
      logo: Dnote,
      github: "https://github.com/your-repo",
    },
  ];

  return (
    <section className="content-section flex justify-center" id="services">
      <div className="max-w-[720px] w-full px-4">
        {/* <h2 className="text-[2.2rem] font-bold about-title mt-12 mb-4 ">
          Work
        </h2> */}
        <div className="flex items-center gap-3 mt-12 mb-4">
          <h2 className="text-[2.2rem] about-title">Work</h2>
          <span className="text-xs tracking-widest text-muted-foreground/60 mb-6 ml-5">
            What I’ve built
          </span>
        </div>

        <p className="text-muted-foreground max-w-[700px] mb-10">
         
        </p>

        <h3 className="text-2xl text-white mb-6 mt-8">Experience</h3>

        <div className="space-y-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400"
            >
              <div className="flex h-[160px]">
                {/* Left: Logo */}
                <div className="w-[220px] flex items-center justify-center border-r border-neutral-800 overflow-hidden">
                  <img
                    src={service.logo}
                    alt={`${service.title} logo`}
                    className="h-full w-full object-contain opacity-95 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 relative">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
                      {service.title}
                    </h3>

                    {/*
                    <a
                      href={service.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 z-20"
                    >
                      G
                    </a>
                    */}
                    <a
                      href="https://dnote.in/"
                      data-ga-event="company_link_click"
                      data-ga-label="experience_dnote"
                      className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 z-20 text-sm"
                      aria-label="External link"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>

                  <p className="mt-3 text-sm text-neutral-400 max-w-[520px] opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
                    {service.description}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
                    {service.duration}
                  </p>

                  {/* Hover Details */}
                  <div className="absolute inset-0 bg-neutral-900/95 p-6 pl-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform">
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />
                    <h4 className="text-white  font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 ">
                      What I worked on
                    </h4>
                    <p className="text-sm  text-neutral-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {service.content}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        

<h3 className="text-2xl text-white mb-6 mt-12">Projects</h3>

        <div className="space-y-6">
          {[
            {
              title: "Health Fact Finder",
              description: "AI-powered platform detecting and flagging medical misinformation.",
              duration: "Jan 2025 – Apr 2025",
              content: "HealthFactFinder uses hybrid deep learning and vector search to identify medical misinformation with 92% accuracy across social media platforms.",
              logo: healthfactfinder,
              link: "https://github.com/sush003/Health_fact_finderV2"
            },
            {
              title: "Study Spark",
              description: "Full-stack MERN platform for AI-driven collaborative learning.",
              duration: "Sep 2024 – Dec 2024",
              content: "StudySpark is a MERN platform featuring AI quiz generation, real-time collaboration via Socket.io, and optimized ETL pipelines for massive datasets.",
              logo: studyspark,
              link: "https://github.com/sush003/StudySparkAI"
            },
            {
              title: "GIFinder",
              description: "Multi-source GIF aggregator for Indian memes.",
              duration: "May 2025",
              content: "GIFinder is a React and Express application that aggregates GIFs from GIPHY, Tenor, Reddit, and Google, optimized for Indian memes.",
              logo: GIFinder,
              link: "https://github.com/sush003/GIFinder"
            },
            {
              title: "Task Flow",
              description: "Effortlessly manage tasks, projects, and deadlines.",
              duration: "Sept 2025 – Oct 2025",
              content: "TaskFlow is a secure, real-time task management PWA featuring calendar integration, project tracking, and responsive UI for efficient workflow organization.",
              logo: taskflow,
              link: "https://github.com/sush003/taskflow33"
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400"
            >
              <div className="flex h-[160px]">
                {/* Left: Logo */}
                <div className="w-[220px] flex items-center justify-center border-r border-neutral-800 overflow-hidden">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={`h-full w-full ${
                      project.title === "GIFinder"
                        ? "object-cover"
                        : project.title === "Health Fact Finder"
                       ? "object-cover"
                       : project.title === "Study Spark"
                       ? "object-cover"
                       : project.title === "Task Flow"
                       ? "object-cover"
                        : "object-contain"
                    } opacity-95 transition-transform duration-300 ease-out group-hover:scale-110`}
                  />
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 relative">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 z-20">
                      <a
                        href={project.link}
                        data-ga-event="project_live_click"
                        data-ga-label={project.title}
                        className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                        aria-label="External link"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                      <a
                        href={project.link}
                        data-ga-event="project_github_click"
                        data-ga-label={project.title}
                        className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                        aria-label="GitHub link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-neutral-400 max-w-[520px] opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
                    {project.description}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
                    {project.duration}
                  </p>

                  {/* Hover Details */}
                  <div className="absolute inset-0 bg-neutral-900/95 p-6 pl-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform">
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />
                    <h4 className="text-white  font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 ">
                      What I worked on
                    </h4>
                    <p className="text-sm  text-neutral-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.content}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

{/* Chrome Extension */}
<h3 className="text-2xl text-white mb-6 mt-8">Chrome Extension</h3>
<div className="space-y-6">
  <Card
    className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400"
  >
    <div className="flex h-[160px]">
      {/* Left: Logo */}
      <div className="w-[220px] flex items-center justify-center border-r border-neutral-800 overflow-hidden">
        <img
          src={trackr}
          alt={`Chrome Extension logo`}
          className="h-full w-full object-contain opacity-95 transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 p-6 relative">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-white opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
            Trackr
          </h3>

          <div className="flex items-center gap-2 z-20">
            <a
              href=""
              data-ga-event="extension_live_click"
              data-ga-label="trackr_extension"
              className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
              aria-label="External link"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
            <a
              href="https://github.com/sush003/Trackr"
              data-ga-event="extension_github_click"
              data-ga-label="trackr_extension"
              className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
              aria-label="GitHub link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <p className="mt-3 text-sm text-neutral-400 max-w-[520px] opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
          Fully automated browser extension for real-time price tracking.

        </p>
        <p className="mt-1 text-xs text-neutral-500 opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
          April 2025
        </p>

        {/* Hover Details */}
        <div className="absolute inset-0 bg-neutral-900/95 p-6 pl-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform">
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />
          <h4 className="text-white  font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 ">
            What I worked on
          </h4>
          <p className="text-sm  text-neutral-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            Sophisticated Chrome Extension utilizing Manifest V3, Service Workers, DOM querying, and EmailJS API integration for autonomous, real-time e-commerce price monitoring.
          </p>
        </div>
      </div>
    </div>
  </Card>
</div>
      </div>
    </section>
  );
}
