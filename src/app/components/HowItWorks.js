import React from "react";
import {
  BrainCircuit,
  Palette,
  Share2,
  Link2,
} from "lucide-react";

const steps = [
  {
    icon: BrainCircuit,
    title: "Content Intelligence",
    description: "Extracting key brand-building moments from your content.",
  },
  {
    icon: Palette,
    title: "Performance Design",
    description:
      "Crafting emotionally impactful and algorithm-optimized assets.",
  },
  {
    icon: Share2,
    title: "Strategic Distribution",
    description: "Ensuring visibility, traction, and brand flow.",
  },
  {
    icon: Link2,
    title: "Ecosystem Linking",
    description:
      "Driving traffic back to your offers and main content.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full  bg-black bg-opacity-90 text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How it <span className="text-cyan-400 neon-text">Works</span>
        </h2>
        <p className="text-gray-300 text-lg">
          You stay focused on what you do best. We make sure the right people see it —
          everywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full ">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div
              key={index}
              className="sticky top-20 bg-white bg-opacity-5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-[0_0_30px_#00ffff33] hover:shadow-[0_0_40px_#00ffff88] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-cyan-400 bg-opacity-20 shadow-[0_0_10px_#00ffff66]">
                  <IconComponent size={28} className="text-cyan-950" />
                </div>
                <h3 className="text-xl font-semibold text-black">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.description}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default HowItWorks;
