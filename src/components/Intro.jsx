import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  // Animation properties for the text
  const animationProps = {
    initial: { x: "0" },
    animate: { x: "-100%" },
    transition: { repeat: Infinity, ease: "linear", duration: 10 },
  };

  return (
    <div className="w-full h-screen">
      {/* Intro Section */}
      <div className="p-[40px] bg-white relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="gradient-bg absolute inset-0 pointer-events-none" />

        <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-20">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 relative z-10 mb-12 lg:mb-0">
            <p className="text-2xl text-zinc-800 mb-8 font-light">
              Welcome to our creative world
            </p>
            <div className="masker mb-4">
              <h1 className="uppercase text-6xl lg:text-8xl tracking-tighter font-bold leading-[5vw] text-[#3B67B6]">
                Virtual
              </h1>
            </div>
            <div className="masker mb-8">
              <h1 className="uppercase text-6xl lg:text-8xl text-zinc-800 font-bold">
                Octopus
              </h1>
            </div>
            <p className="mt-8 text-gray-600 max-w-md text-[18px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="text-white text-xl mt-10 px-8 py-3 rounded-full font-semibold bg-[#3B67B6] hover:bg-[#2a4b91] transition-all">
              Start for Free
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 pl-10 relative z-10">
            <img 
              src="/images/octopus-removebg-preview.png" 
              alt="Octopus" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Animated Text Section - Centered */}
      <div className=" py-20 bg-[#3B67B6] flex items-center justify-center">
        <div className="text-white border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap">
          <motion.h1
            {...animationProps}
            className="text-[10vw] leading-none uppercase font-montserrat font-semibold pr-34"
          >
            Virtual Octopus Ai
          </motion.h1>
          <motion.h1
            {...animationProps}
            className="text-[10vw] leading-none uppercase font-montserrat font-semibold pr-34"
          >
            Virtual Octopus Ai
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
