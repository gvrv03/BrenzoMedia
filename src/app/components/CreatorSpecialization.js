import React from "react";
import { GraduationCap, Dumbbell, Mic2 } from "lucide-react";

const creatorTypes = [
  {
    title: "Experts & Educators",
    icon: <GraduationCap size={32} className="text-cyan-400" />,
    description: "Self-help, business, money, or motivational YouTubers.",
  },
  {
    title: "Lifestyle Influencers",
    icon: <Dumbbell size={32} className="text-cyan-400" />,
    description:
      "Traders, fitness creators, and performance-focused influencers.",
  },
  {
    title: "Founders & Thought Leaders",
    icon: <Mic2 size={32} className="text-cyan-400" />,
    description: "Entrepreneurs with a content archive or podcast experience.",
  },
];

const CreatorSpecialization = () => {
  return (
    <section className="w-full  bg-black bg-opacity-90 text-white flex flex-col items-center">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          🎯{" "}
          <span className=" not-only:neon-text">
            We Specialize In
          </span>{" "}
          
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {creatorTypes.map((type, index) => (
          <div
            key={index}
            className="group sticky top-20 border border-cyan-400 border-opacity-20 rounded-2xl p-6 backdrop-blur-md bg-white bg-opacity-5 shadow-[0_0_30px_#00ffff22] hover:shadow-[0_0_40px_#00ffff88] transition-all"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="p-2  ">{type.icon}</div>
              <h3 className="text-xl font-semibold text-black">{type.title}</h3>
            </div>
            <p className="text-gray-500">{type.description}</p>

            {/* Glow border effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border-2 border-cyan-400 border-opacity-50 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Final message */}
      <div className="mt-16 text-center max-w-xl bgGradient bg-opacity-5 border border-white/10 backdrop-blur-md rounded-xl px-6 py-4 shadow-[0_0_20px_#00ffff33]">
        <p className="text-white  text-lg font-medium">
          🧠 If you’ve got long-form videos or raw content — we’ll make it work
          for you.
        </p>
      </div>
    </section>
  );
};

export default CreatorSpecialization;
