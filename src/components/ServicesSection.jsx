import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Dnote from "../assets/images/Dnote_final.png";
export default function ServicesSection() {
  const services = [
    {
      title: "Dnote",
      description: "Software Developer Intern",
      duration: "May 2024 – Aug 2024",
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
              title: "Project 1",
              description: "Description for Project 1",
              duration: "Jan 2024 – Apr 2024",
              content: "Detailed content for Project 1...",
              logo: Dnote,
              link: "#"
            },
            {
              title: "Project 2",
              description: "Description for Project 2",
              duration: "Sep 2023 – Dec 2023",
              content: "Detailed content for Project 2...",
              logo: Dnote,
              link: "#"
            },
            {
              title: "Project 3",
              description: "Description for Project 3",
              duration: "May 2023 – Aug 2023",
              content: "Detailed content for Project 3...",
              logo: Dnote,
              link: "#"
            },
            {
              title: "Project 4",
              description: "Description for Project 4",
              duration: "Jan 2023 – Apr 2023",
              content: "Detailed content for Project 4...",
              logo: Dnote,
              link: "#"
            }
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
                    className="h-full w-full object-contain opacity-95 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 relative">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 z-20 text-sm"
                      aria-label="External link"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
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
      </div>
    </section>
  );
}
