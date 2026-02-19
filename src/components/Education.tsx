import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // add more weights if needed
  display: "swap",
});

export default function Education() {
  return (
    <div
      className="sm:py-20 pb-10 flex flex-col justify-center items-start gap-10"
      id="education"
    >
      <p className="text-neutral-500 tracking-wide xl:text-lg md:text-base text-md font-light">
        Education
      </p>
      <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-primary"></span>

          <div className="-mt-2 flex flex-col gap-3">
            <Link
              href="https://github.com/tongbora/MiniProject-JDBC"
              target="_blank"
              className="text-lg font-bold text-primary"
            >
              Institute of Science and Technology Advanced Development (ISTAD)
            </Link>
            <p className="text-sm font-medium text-gray-700">
              Professional Training Program
            </p>
            <time className="text-xs/none font-medium text-gray-700">
              2024 - 2026
            </time>
            <p
              className={`${poppins.className} mt-0.5 text-md leading-8 text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
            >
              - Spring Boot Microservices Architecture: Learned key
              microservices architecture and design patterns such as API
              Gateway, Service Discovery, Config Server, Circuit Breaker, and
              Event-Driven communication, with supporting observability
              practices using Grafana, Loki, Alloy, Spring Actuator,
              Micrometer, Prometheus, and OpenTelemetry.
            </p>
            <p
              className={`${poppins.className} mt-0.5 text-md leading-8 text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
            >
              - Full-Stack Web Development: Learned to build end-to-end
              applications using Spring Boot, React.js, Next.js, Docker,
              PostgreSQL, and Keycloak.
            </p>
            <p
              className={`${poppins.className} mt-0.5 text-md leading-8 text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
            >
              - Web Development Foundations: Learned core web development
              concepts and fundamentals, including HTML, CSS, Tailwind CSS,
              React.js, and Java.
            </p>
          </div>
        </li>

        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-primary"></span>

          <div className="-mt-2 flex flex-col gap-3">
            <Link
              href="http://www.ppiu.edu.kh/public/"
              target="_blank"
              className="text-lg font-bold text-primary"
            >
              Phnom Penh International University (PPIU)
            </Link>
            <p className="text-sm font-medium text-gray-700">
              Bachelor's Degree, Computer Science
            </p>
            <time className="text-xs/none font-medium text-gray-700">
              2024 - Present
            </time>
            <p
              className={`${poppins.className} mt-0.5 text-md leading-8 text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
            >
              I am currently pursuing a Bachelor's degree in Computer Science at
              Phnom Penh International University (PPIU), where I am building a
              strong foundation in programming, algorithms, and software
              engineering. Through coursework and hands-on projects, I continue
              to strengthen my problem-solving ability and practical development
              skills for real-world software challenges.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}
