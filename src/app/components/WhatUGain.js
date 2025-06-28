import React from "react";
import { CheckCircle } from "lucide-react";

const benefits = [
  "More visibility — you’ll start showing up everywhere",
  "More authority — your face becomes your brand",
  "More traction — more views, more followers, more sales",
  "No extra effort — we do all the heavy lifting",
];

const WhatUGain = () => {
  return (
    <section className="w-full  bg-black bg-opacity-90 text-white flex flex-col items-center">
      <div className="max-w-3xl text-center mb-5">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="animate-bounce" >🚀</span> <span className="textGradient neon-text">Why Top Voices Choose Us</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Just sit back and watch yourself go viral —<br />
        </p>
      </div>

      <div className="max-w-2xl w-full space-y-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex sticky top-20 items-start gap-4 bg-white bg-opacity-5 border border-white/10 p-4 rounded-xl backdrop-blur-md hover:shadow-[0_0_30px_#00ffff55] transition-all"
          >
            <div className="pt-1">
              <CheckCircle size={24} className="text-cyan-400 " />
            </div>
            <p className="text-black text-base">{item}</p>
          </div>
        ))}
      </div>

      {/* Optional glow bar accent */}
      <div className="w-1/2 h-1 mt-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-md opacity-30 rounded-full" />
    </section>
  );
};

export default WhatUGain;
