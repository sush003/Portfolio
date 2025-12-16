// import { StackIcon } from "@/components/ui/stack-icon";
import StackIcon from "tech-stack-icons";
import splineIcon from "../assets/images/spline.png";

const iconMap = {
  JavaScript: "js",
  TypeScript: "typescript",
  C: "c#",
  "C++": "c++",
  Java: "java",
  HTML: "html5",
  CSS: "css3",
  SQL: "mysql",

  React: "react",
  Tailwind: "tailwindcss",
  Framer: "framer",
  Shadcn: "shadcnui",
  "Express.js": "expressjs",
  "React Flow": "reactflow",
  AceternityUI: "aceternity",
  Spline: "spline",

  "Node.js": "nodejs",
  "Spring Boot *": "spring",

  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  AWS: "aws",
  Azure: "azure",

  Git: "git",
  Docker: "docker",
  GitHub: "github",
  "VS Code": "vscode",
  Vercel: "vercel",
  Postman: "postman",
  WebSockets: "websocket",
  Firebase: "firebase",
};

const skills = [
  {
    category: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "Java",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    category: "Frameworks / Libraries",
    items: [
      "React",
      "Tailwind",
      "Framer",
      "Shadcn",
      "Express.js",
      "React Flow",
      "AceternityUI",
      "Spline",
    ],
  },
  {
    category: "Backend & Runtime",
    items: ["Node.js", "Spring Boot *"],
  },
  {
    category: "Database / Cloud",
    items: ["MongoDB", "PostgreSQL", "Supabase", "AWS", "Azure"],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "Docker",
      "GitHub",
      "VS Code",
      "Vercel",
      "Postman",
      "WebSockets",
      "Firebase",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="content-section dark" id="features">
      <div className="max-w-[700px] mx-auto text-left text-[2.2rem]">
        <h2 className="mt-3">Skills</h2>

        <p className="text-[1rem] max-w-[720px] text-muted-foreground">
          This is a collection of the languages, frameworks, and tools I utilize
          to bring digital concepts to life. I am committed to mastering these
          technologies to deliver high-performance, user-centric software
          solutions.
        </p>

        <div className="space-y-10 mt-6">
          {skills.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg mb-3">{group.category} -</h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-pill flex items-center gap-2"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="shrink-0 inline-flex items-center justify-center w-3 h-3">
                      {skill === "Spline" ? (
                        <img
                          src={splineIcon}
                          alt="Spline"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <StackIcon
                          name={iconMap[skill]}
                          variant="dark"
                          className="w-full h-full"
                        />
                      )}
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#000" fill-rule="evenodd" d="M56.099 6.292h4.51L100 74.519v.004l-8.482 14.46-34.473-.008 3.494 6.026h-1.52l-3.495-6.026-42.762-.003h-.03l-2.19-3.841H7.828L0 71.576l.007-.004v-.003l10.044-17.4 9.292-5.361 15.374-26.63-3.093-5.35 7.408-12.829h15.744zm-7.796 21.261L21.11 74.533h26.037l-3.01-5.191 28.369.024z" clip-rule="evenodd"/></svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#fff" fill-rule="evenodd" d="M56.099 6.292h4.51L100 74.519v.004l-8.482 14.46-34.473-.008 3.494 6.026h-1.52l-3.495-6.026-42.762-.003h-.03l-2.19-3.841H7.828L0 71.576l.007-.004v-.003l10.044-17.4 9.292-5.361 15.374-26.63-3.093-5.35 7.408-12.829h15.744zm-7.796 21.261L21.11 74.533h26.037l-3.01-5.191 28.369.024z" clip-rule="evenodd"/></svg> */}