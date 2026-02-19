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
import Projects from "@/components/Project";
import Education from "@/components/Education";

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
          src="/image/bg10.png"
          alt="background"
          width={3000}
          height={800}
          className="w-full min-h-1/2 h-[45vh] sm:h-[49vh] object-cover"
        />
      </div>
      <div className="w-full px-6 sm:px-3 md:px-10 xl:px-40 font-geist-mono xl:pt-20 sm:pt-15 pt-10">
        <div className="absolute sm:top-30 top-25">
          <div className="flex flex-col  justify-center gap-4 text-white">
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold">
              Tong Bora
            </h1>
            <p className="text-md font-extralight xl:pr-140 md:pr-70 pr-4 leading-6 sm:leading-8 ">
              Computer Science at{" "}
              <Link href={"https://www.ppiu.edu.kh/public/"}>
                <span className="hover:underline">PPIU</span>{" "}
              </Link>
              | Spring Microservices at{" "}
              <Link href={"https://www.cstad.edu.kh/"}>
                <span className="hover:underline">ISTAD</span>{" "}
              </Link>
            </p>
          </div>
          <div className="flex items-center xl:py-16 md:py-14 sm:py-10 py-8 gap-4">
            <Link
              href="https://www.facebook.com/tongboraa"
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
              href={"https://www.instagram.com/tongboraa/"}
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
            I am a dedicated computer science student at PPIU, 
            passionate about technology and problem-solving. 
            I have completed Full Stack Web Development at ISTAD, 
            gaining hands-on experience in both frontend and backend 
            technologies. Currently, I am expanding my expertise by 
            learning Spring microservices, diving deeper into building 
            scalable and distributed systems. I am constantly exploring 
            new tools and frameworks to create modern, responsive, 
            and efficient web applications. With a strong interest 
            in software development and a commitment to continuous 
            learning, I am eager to contribute to real-world projects and grow as a developer.
          </p>
        </div>
        <Projects />
        <Education />
      </div>
    </div>
  );
}
