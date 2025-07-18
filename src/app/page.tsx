import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Poppins } from "next/font/google";
import Image from "next/image";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // add more weights if needed
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <div className="relative z-[-1] ">
        <Image
          src="/image/bg2.jpg"
          alt="background"
          width={3000}
          height={800}
          className="w-full min-h-1/2 h-[45vh] sm:h-[49vh] object-cover"
        />
      </div>
      <div className="w-full px-6 sm:px-3 md:px-10 xl:px-40 font-geist-mono xl:pt-20 sm:pt-15 pt-10">
        <div className="absolute sm:top-30 top-25">
          <div className="flex flex-col  justify-center gap-4">
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold">
              Tong Bora
            </h1>
            <p className="text-md font-extralight xl:pr-140 md:pr-70 pr-4 leading-6 sm:leading-8 ">
              Computer Science Student at{" "}
              <Link href={"https://www.ppiu.edu.kh/public/"}>
                <span className="hover:underline">PPIU</span>{" "}
              </Link>
              | Web Full Stack Student at{" "}
              <Link href={"https://www.cstad.edu.kh/"}>
                <span className="hover:underline">ISTAD</span>{" "}
              </Link>
            </p>
          </div>
          <div className="flex items-center xl:py-16 md:py-14 sm:py-10 py-8 gap-4">
            <Link
              href="https://www.facebook.com/bun.leap.9849/"
              target="_blank"
              className="inline-block w-6 h-6 ml-2"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-gray-100 hover:text-gray-300"
              />
            </Link>
            <Link
              href={"https://github.com/tongbora"}
              target="_blank"
              className="inline-block w-6 h-6 ml-2"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-100 hover:text-gray-300"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/its__biggboss/"}
              target="_blank"
              className="inline-block w-6 h-6  ml-2"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-100 hover:text-gray-300"
              />
            </Link>
          </div>
        </div>
        <span className="flex items-center ">
          <span className="h-px flex-1 bg-gray-300"></span>
        </span>
        <div
          className="flex flex-col justify-center items-start gap-10 py-10"
          id="about-me"
        >
          <TypingAnimation className="xl:text-4xl md:text-3xl text-2xl font-light text-neutral-700 ">
            About Me_
          </TypingAnimation>
          <p
            className={`text-neutral-700 ${poppins.className} leading-8 sm:leading-10 xl:text-lg md:text-base text-md  sm:pr-50 pr-0  sm:text-justify text-left`}
          >
            I am a dedicated computer science student at PPIU, passionate about
            technology and problem-solving. Alongside my university studies, I
            am also pursuing Full Stack Web Development at ISTAD to strengthen
            my practical skills in both frontend and backend technologies. I am
            constantly exploring new tools and frameworks to build modern,
            responsive, and efficient web applications. With a strong interest
            in software development and continuous learning, I am eager to
            contribute to real-world projects and grow as a developer.
          </p>
        </div>
        <div
          className="sm:py-20 pb-10 flex flex-col justify-center items-start gap-10"
          id="projects"
        >
          <p className="text-neutral-500 tracking-wide xl:text-lg md:text-base text-md font-light">
            Projects
          </p>
          <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-[#4D55CC]"></span>

              <div className="-mt-2 flex flex-col gap-3">
                <Link
                  href="https://thyntech.vercel.app/"
                  target="_blank"
                  className="text-lg font-bold text-[#4D55CC]"
                >
                  Thynk Tech
                </Link>
                <time className="text-xs/none font-medium text-gray-700">
                  2025
                </time>
                <p
                  className={`${poppins.className} mt-0.5 leading-8 text-md text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
                >
                  Thynk Tech is a modern eCommerce platform built with Next.js
                  and TypeScript, designed for fast and responsive user
                  experience. It integrates with a free public product API to
                  display product listings, categories, and details. The project
                  showcases dynamic routing, API data fetching, and a clean,
                  component-based frontend structure using modern web
                  technologies.
                </p>
              </div>
            </li>

            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-[#4D55CC]"></span>

              <div className="-mt-2 flex flex-col gap-3">
                <Link
                  href="https://github.com/tongbora/MiniProject-JDBC"
                  target="_blank"
                  className="text-lg font-bold text-[#4D55CC]"
                >
                  Product Management System
                </Link>
                <time className="text-xs/none font-medium text-gray-700">
                  2025
                </time>
                <p
                  className={`${poppins.className} mt-0.5 text-md leading-8 text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
                >
                  A Java-based application using Gradle, JDBC, and file
                  handling. On first run, it registers users by storing their
                  email and password in a file. After that, it auto-logins using
                  the stored credentials. Users can view products, add items to
                  a cart, and place orders. This project highlights basic
                  authentication, file I/O, and product management features in
                  Java.
                </p>
              </div>
            </li>

            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-[#4D55CC]"></span>

              <div className="-mt-2 flex flex-col gap-3">
                <Link
                  href="https://fluentflow.live/"
                  target="_blank"
                  className="text-lg font-bold text-[#4D55CC]"
                >
                  Fluent Flow
                </Link>
                <time className="text-xs/none font-medium text-gray-700">
                  2024
                </time>
                <p
                  className={`${poppins.className} mt-0.5 text-md leading-8 text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
                >
                  Fluent-Flow is an innovative English learning platform
                  designed specifically for Khmer learners. With bilingual
                  support (English & Khmer), interactive lessons, and AI-powered
                  assistance, users can improve their English skills through
                  engaging exercises, videos, and infographics.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
