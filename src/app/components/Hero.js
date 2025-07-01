import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-20  px-6 text-center max-w-6xl mx-auto flex flex-col items-center">
      {/* Subtle background pattern */}
      <div className=" w-full grid place-items-center">
        <div className="mb-4 w-fit  items-center flex gap-2 px-4 py-1 text-sm border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-[#00f2ff]">
          <Star className="animate-spin  w-4" /> Strategic Content Partner for
          Creators
        </div>
      </div>

      <h1 className=" text-3xl uppercase  z-50 sm:text-6xl font-extrabold leading-tight ">
        Content Marketing <span className="textGradient">Agency</span>
      </h1>
      <p className="mt-6 text-base text-gray-300 max-w-2xl mx-auto">
        You already have great content. We make sure the right people see it,
        everywhere.
      </p>

      <button
        data-cal-namespace="30min"
        data-cal-link="brenzomedia/30min"
        data-cal-config='{"layout":"month_view"}'
        className="mt-8 cursor-pointer bgGradient hover:bg-[#00cfff] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
      >
        ⚡ Start Your Transformation
      </button>

      {/* YouTube Video Section */}
      <div className="py-10 px-6 flex w-full justify-center">
        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 shadow-[0_0_20px_#0033ff]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
  
      <div className="border rounded-full p-2 px-3 border-gray-800 text-white text-sm flex items-center gap-2">
        <span className="text-yellow-400 font-semibold">4.9/5 |</span> Trusted
        by 10+ Brands
      </div>
    </section>
  );
};

export default Hero;
