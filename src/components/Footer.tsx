import React from "react";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full" id="contact">
      <div className="relative w-full overflow-hidden">
        <Image
          src="/image/bg13.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="relative z-10 px-6 sm:px-10 md:px-16 xl:px-40 py-10 sm:py-12 xl:py-16 font-geist-mono text-white">
          <div className="flex flex-col gap-6 sm:gap-8 xl:gap-10">
            <TypingAnimation className="text-2xl sm:text-3xl xl:text-4xl font-light drop-shadow-md">
              Get In Touch_
            </TypingAnimation>

            <div className="flex flex-col gap-3 sm:gap-4 xl:gap-5">
              <p className="font-extrabold text-sm sm:text-base xl:text-lg">
                PHONE:{" "}
                <Link
                  href="tel:+855969194339"
                  className="font-extralight hover:underline"
                >
                  +855 969 194 339
                </Link>
              </p>
              <p className="font-extrabold text-sm sm:text-base xl:text-lg">
                LINKEDIN:{" "}
                <Link
                  href="https://www.linkedin.com/in/tongbora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extralight hover:underline"
                >
                  Tong Bora
                </Link>
              </p>
              <p className="font-extrabold text-sm sm:text-base xl:text-lg break-words">
                EMAIL:{" "}
                <Link
                  href="mailto:tongbora.official@gmail.com"
                  className="font-extralight hover:underline"
                >
                  tongbora.official@gmail.com
                </Link>
              </p>
            </div>

            <p className="text-center text-xs sm:text-sm text-gray-300 pt-4 sm:pt-6">
              © 2025 Built with 💻 by Tong Bora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
