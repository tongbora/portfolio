import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // add more weights if needed
  display: "swap",
});

export default function Projects(){
    return(
        <div
          className="sm:py-20 pb-10 flex flex-col justify-center items-start gap-10"
          id="projects"
        >
          <p className="text-neutral-500 tracking-wide xl:text-lg md:text-base text-md font-light">
            Projects
          </p>
          <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
            {/* <li className="relative -ms-1.5 flex items-start gap-4">
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
            </li> */}

            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-primary"></span>

              <div className="-mt-2 flex flex-col gap-3">
                <Link
                  href="https://www.exstad.tech/"
                  target="_blank"
                  className="text-lg font-bold text-primary"
                >
                  exSTAD
                </Link>
                <time className="text-xs/none font-medium text-gray-700">
                  2025
                </time>
                <p
                  className={`${poppins.className} mt-0.5 leading-8 text-md text-gray-700 sm:pr-50 pr-0 sm:text-justify text-start`}
                >
                  exSTAD is an innovative learning management system solution to
                  facilitate course management and educational content delivery
                  to scholarship and short course programs. exSTAD key features
                  include the ability to create and organize training program,
                  centralize course materials, manage user roles and
                  enrollments, track learner progress and generate detailed
                  reports.
                </p>
              </div>
            </li>

            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-primary"></span>

              <div className="-mt-2 flex flex-col gap-3">
                <Link
                  href="https://github.com/tongbora/MiniProject-JDBC"
                  target="_blank"
                  className="text-lg font-bold text-primary"
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
              <span className="size-3 shrink-0 rounded-full bg-primary"></span>

              <div className="-mt-2 flex flex-col gap-3">
                <Link
                  href="https://fluentflow.oudom.dev/"
                  target="_blank"
                  className="text-lg font-bold text-primary"
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
    )
}