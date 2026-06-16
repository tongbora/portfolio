import React from "react";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full relative" id="contact">
      <div className="w-full h-[30vh] md:h-[34vh] xl:h-[38vh]">
        <Image
          src="/image/bg13.png"
          alt="background"
          fill
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 px-6 sm:px-10 md:px-16 xl:px-40 pt-10 sm:pt-12 xl:pt-16 font-geist-mono z-10">
          <div className="flex flex-col gap-8 sm:gap-10 xl:gap-14 text-white">
            <TypingAnimation className="text-2xl sm:text-3xl xl:text-4xl font-light drop-shadow-md">
              Get In Touch_
            </TypingAnimation>

            <div className="flex flex-col gap-3 sm:gap-4 xl:gap-5">
              <p className="font-extrabold text-sm sm:text-base xl:text-lg">
                PHONE:{" "}
                <Link href="tel:+855969194339" target="_blank">
                  <span className="font-extralight">+855 969 194 339</span>
                </Link>
              </p>
              <p className="font-extrabold text-sm sm:text-base xl:text-lg">
                LINKEDIN:{" "}
                <Link href="https://www.linkedin.com/in/tongbora/" target="_blank">
                  <span className="font-extralight">Tong Bora</span>
                </Link>
              </p>
              <p className="font-extrabold text-sm sm:text-base xl:text-lg">
                EMAIL:{" "}
                <Link href="mailto:tongbora.official@gmail.com" target="_blank">
                  <span className="font-extralight">
                    tongbora.official@gmail.com
                  </span>
                </Link>
              </p>
            </div>

            <div>
              <p className="text-center text-sm sm:text-base text-gray-300">
                © 2025 Built with 💻 by Tong Bora. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}