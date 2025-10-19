"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        } px-4 sm:px-6 md:px-10 xl:px-40 sm:py-6 py-3`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`hidden sm:flex space-x-6 md:space-x-8 font-black text-sm md:text-base ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Link
              href="#about-me"
              className="font-geist-mono hover:opacity-75 transition-opacity"
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="font-geist-mono hover:opacity-75 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="font-geist-mono hover:opacity-75 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`sm:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/50 shadow-2xl transform transition-transform duration-300 z-50 sm:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <div className="space-y-6">
            <a
              href="#about"
              onClick={closeMenu}
              className="block font-geist-mono font-black text-lg text-black hover:text-gray-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block font-geist-mono font-black text-lg text-black hover:text-gray-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block font-geist-mono font-black text-lg text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
