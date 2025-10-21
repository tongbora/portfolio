import React from "react";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full relative" id="contact">
      <div className=" w-full h-[40vh] sm:h-[50vh]">
        <Image
          src="/image/bg13.png"
          alt="background"
          fill
          className="object-cover w-full h-full"
        />

        <div className="absolute -top-10 inset-0 px-6 sm:px-3 md:px-10 xl:px-40 pt-20 xl:pt-30 sm:pt-25 font-geist-mono z-10">
          <div className="flex flex-col sm:gap-16 gap-6 text-white">
            <TypingAnimation className="xl:text-4xl md:text-3xl text-2xl font-light drop-shadow-md">
              Get In Touch_
            </TypingAnimation>

            <div className={`flex flex-col sm:gap-4 gap-3`}>
              <p className="font-extrabold xl:text-lg md:text-md text-sm">
                PHONE:{" "}
                <Link href="tel:+855969194339" target="_blank">
                  <span className="font-extralight">+855 969 194 339</span>
                </Link>
              </p>
              <p className="font-extrabold xl:text-lg md:text-md text-sm">
                FACEBOOK:
                <Link href="https://www.facebook.com/tongboraa" target="_blank">
                  <span className="font-extralight">Tøng Borā</span>
                </Link>
              </p>
              <p className="font-extrabold xl:text-lg md:text-md text-sm">
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
