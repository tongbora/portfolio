import React from "react";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full " id="contact">
      <div className="relative w-full h-[50vh] sm:h-[60vh]">
        <Image
          src="/image/140.jpg"
          alt="background"
          fill
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 px-6 sm:px-3 md:px-10 xl:px-40 pt-20 xl:pt-30 sm:pt-25 font-geist-mono z-10">
          <div className="flex flex-col sm:gap-16 gap-6 text-white">
            <TypingAnimation className="xl:text-4xl md:text-3xl text-2xl font-light drop-shadow-md">
              Get In Touch_
            </TypingAnimation>

            <div className={`flex flex-col sm:gap-4 gap-3`}>
              <p className="font-extrabold">
                PHONE:{" "}
                <Link href="tel:+855969194339" target="_blank">
                  <span className="font-extralight">+855 969 194 339</span>
                </Link>
              </p>
              <p className="font-extrabold">
                FACEBOOK:
                <Link href="https://www.facebook.com/bun.leap.9849/">
                  <span className="font-extralight">Tøng Borā</span>
                </Link>
              </p>
              <p className="font-extrabold">
                EMAIL:{" "}
                <Link href="mailto:tongbora.official@gmail.com" target="_blank">
                  <span className="font-extralight">
                    tongbora.official@gmail.com
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <p className="text-center text-sm text-gray-100 mt-8">
                © 2025 Built with 💻 by Tong Bora. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
