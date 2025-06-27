"use client"
import React, { useEffect } from "react";
import { CheckCircle, PlayCircle, ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import WhatUGain from "../components/WhatUGain";
import HowItWorks from "../components/HowItWorks";
import CreatorSpecialization from "../components/CreatorSpecialization";
import ContactForm from "../components/contact-form";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function LandingPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#0033ff"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <div className="bg-gradient-to-br from-black via-[#000522] flex flex-col gap-20  to-black  text-white font-sans min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* What You’ll Gain */}
      <WhatUGain />

      {/* How it Works */}
      {/* <HowItWorks/> */}

      {/* Specialization Section */}
      <CreatorSpecialization />

      {/* Call to Action - Bottom */}
      <section className="py-12 px-6 text-center backdrop-blur-md bg-white/5 rounded-xl border border-white/10 shadow-[0_0_20px_#0033ff] max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-4 text-[#00f2ff]">
          Ready to Become the face of your niche?
        </h2>
        <p className="text-lg mb-4 font-semibold ">
          👉 Apply now to work with{" "}
          <span className="textGradient">Brenzo Media</span> - limited creator
          spots open each month
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            data-cal-namespace="30min"
            data-cal-link="brenzomedia/30min"
            data-cal-config='{"layout":"month_view"}'
            className="bgGradient text-white justify-center py-4 cursor-pointer font-bold px-6 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <ArrowRight size={18} /> Book Discovery Call
          </button>
        </div>
      </section>

      <ContactForm />

      {/* <Cal namespace="30min"
    calLink="brenzomedia/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"dark"}}
    
    
  /> */}
      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-white/10 mt-10 text-sm">
        <p className="mb-2">Contact: hello@brenzo.media</p>
        <p className="mb-2">Made by Brenzo Media</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline text-[#00f2ff]">
            Instagram
          </a>
          <a href="#" className="hover:underline text-[#00f2ff]">
            YouTube
          </a>
        </div>
      </footer>
    </div>
  );
}
