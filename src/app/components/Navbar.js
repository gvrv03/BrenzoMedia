"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full left-0 z-50 transition-all duration-500 ${
          scrolled ? " bg-black  " : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center md:text-3xl  text-xl group">
              <span className="text-2xl md:text-4xl font-semibold" >B</span>renzo <span className="font-semibold" >Media</span>
            </div>

            <div className="">
              <button
                data-cal-namespace="30min"
                data-cal-link="brenzomedia/30min"
                data-cal-config='{"layout":"month_view"}'
                className="bgGradient rounded-full cursor-pointer text-white px-6 py-2  hover:bg-[#4FB6EC]  transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#4FB6EC]  /25 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Strategy Chat
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
