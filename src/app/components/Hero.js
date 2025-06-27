import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-20  px-6 text-center max-w-6xl mx-auto">
      {/* <Image src="/GridTunnel.svg" height={100} width={100} className=" w-full md:-top-14 left-0  absolute  " /> */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#4FB6EC]   rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4FB6EC]  rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4FB6EC]  -600 rounded-full blur-3xl"></div>
      </div>
      <div className=" w-full grid place-items-center">
        <div className="mb-4 w-fit  items-center flex gap-2 px-4 py-1 text-sm border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-[#00f2ff]">
          <Star className="animate-spin  w-4" /> Strategic Content Partner for
          Creators
        </div>
      </div>

      <h1 className=" text-4xl z-50 sm:text-6xl font-extrabold leading-tight ">
        Content Marketing <span className="textGradient">Agency</span>
      </h1>
      <p className="mt-6 text-lg max-w-2xl mx-auto">
        You already have great content. We make sure the right people see it,
        everywhere.
      </p>
      <button 
      
      data-cal-namespace="30min"
      data-cal-link="brenzomedia/30min"
      data-cal-config='{"layout":"month_view"}'
      
      className="mt-8 cursor-pointer bgGradient hover:bg-[#00cfff] text-black font-bold py-3 px-8 rounded-full transition-all duration-300">
        ⚡ Start Your Transformation
      </button>

      {/* <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
        <div>
          <p className="text-2xl font-bold text-[#00f2ff]">500+</p>
          <p className="text-sm">Projects Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#00f2ff]">10M+</p>
          <p className="text-sm">Views Generated</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#00f2ff]">98%</p>
          <p className="text-sm">Client Satisfaction</p>
        </div>
      </div> */}

      {/* YouTube Video Section */}
      <div className="py-10 px-6 flex justify-center">
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
    </section>
  );
};

export default Hero;
