import { Poppins } from "next/font/google";
import type { IconType } from "react-icons";
import { FaGithub, FaJenkins, FaLinux } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import {
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiMongodb,
  SiNextdotjs,
  SiOpentelemetry,
  SiPrometheus,
  SiPostgresql,
  SiSqlite,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiGrafana,
  SiTailwindcss,
  SiTurborepo,
} from "react-icons/si";
import {
  BookOpen,
  Code2,
  Database,
  Layers3,
  Radar,
  Route,
  Server,
  Shield,
  Wrench,
  Workflow,
  Activity,
} from "lucide-react";
import { TypingAnimation } from "./magicui/typing-animation";

function LokiIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="5" width="2.2" height="10.8" rx="0.7" fill="#FF7A00" transform="rotate(-15 2 5)" />
      <rect x="5.5" y="2" width="2.2" height="14.2" rx="0.7" fill="#FF9A00" transform="rotate(-15 5.5 2)" />
      <rect x="9.2" y="4" width="2.2" height="12.6" rx="0.7" fill="#FF6A00" transform="rotate(-15 9.2 4)" />
      <rect x="12.8" y="6" width="2.2" height="10.1" rx="0.7" fill="#FFB400" transform="rotate(-15 12.8 6)" />
      <rect x="4" y="16.5" width="2.8" height="2.8" rx="0.5" fill="#FFC400" />
      <rect x="8" y="16.5" width="2.8" height="2.8" rx="0.5" fill="#FFB200" />
      <rect x="12" y="16.5" width="2.8" height="2.8" rx="0.5" fill="#FFC400" />
      <rect x="16" y="15" width="6.5" height="2.8" rx="0.5" fill="#FFB400" transform="rotate(-15 16 15)" />
      <rect x="16.5" y="19" width="6.5" height="2.8" rx="0.5" fill="#FFCF33" transform="rotate(-15 16.5 19)" />
    </svg>
  );
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

type TechGroup = {
  title: string;
  subtitle: string;
  icon: IconType;
  accent: string;
  items: Array<{
    label: string;
    icon: IconType;
    color: string;
  }>;
};

const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    subtitle: "Interfaces, animation, and responsive UI",
    icon: Code2,
    accent: "text-sky-600",
    items: [
      { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "Turborepo", icon: SiTurborepo, color: "#000000" },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs and reactive systems",
    icon: Server,
    accent: "text-emerald-600",
    items: [
      { label: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { label: "Spring WebFlux", icon: SiSpring, color: "#6DB33F" },
      { label: "Spring Cloud", icon: SiSpring, color: "#6DB33F" },
    ],
  },
  {
    title: "System Design",
    subtitle: "Scalable architecture and distributed system patterns",
    icon: Layers3,
    accent: "text-violet-600",
    items: [
      { label: "Microservices", icon: Server, color: "#172be1" },
      { label: "API Gateway", icon: Route, color: "#7C3AED" },
      { label: "Service Discovery", icon: Radar, color: "#15cd34" },
      { label: "Event-Driven", icon: Workflow, color: "#172be1" },
    ],
  },
  {
    title: "Observability",
    subtitle: "Monitoring, metrics, and distributed tracing",
    icon: Activity,
    accent: "text-rose-600",
    items: [
      { label: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { label: "Grafana", icon: SiGrafana, color: "#F46800" },
      { label: "OpenTelemetry", icon: SiOpentelemetry, color: "#000000" },
      { label: "Loki", icon: LokiIcon, color: "#2D6CDF" },
    ],
  },
  {
    title: "Databases",
    subtitle: "Relational and document storage",
    icon: Database,
    accent: "text-blue-600",
    items: [
      { label: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { label: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
      { label: "SQLite", icon: SiSqlite, color: "#003B57" },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Version control, containerization, and deployment",
    icon: Wrench,
    accent: "text-orange-600",
    items: [
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "GitHub", icon: FaGithub, color: "#181717" },
      { label: "Docker", icon: SiDocker, color: "#2496ED" },
      { label: "Linux", icon: FaLinux, color: "#000000" },
    ],
  },
];

export default function Technologies() {
  return (
    <section
      className="sm:py-20 py-12 flex flex-col justify-center items-start gap-10"
      id="technologies"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-neutral-500 tracking-wide xl:text-lg md:text-base text-md font-light">
          <Code2 className="h-5 w-5 text-sky-600" />
          <p>Technologies</p>
        </div>
        <TypingAnimation className="xl:text-4xl md:text-3xl text-2xl font-light text-neutral-700 ">
            Technologies I Work With_
        </TypingAnimation>
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-2">
        {techGroups.map(({ title, subtitle, icon: Icon, accent, items }) => (
          <article
            key={title}
            className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className={`rounded-xl bg-gray-100 p-3 ${accent}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-800">{title}</h3>
                <p className={`${poppins.className} mt-1 text-sm leading-6 text-gray-600`}>
                  {subtitle}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {items.map(({ label, icon: ItemIcon, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700"
                >
                  <ItemIcon className="mr-2 h-3.5 w-3.5" style={{ color }} />
                  {label}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
