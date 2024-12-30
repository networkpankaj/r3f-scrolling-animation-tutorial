import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  // Define the common animation properties
  const animationProps = {
    initial: { x: "0" },
    animate: { x: "-100%" },
    transition: { repeat: Infinity, ease: "linear", duration: 10 },
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-zinc-900">
      <div className="text-white border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap">
        <motion.h1
          {...animationProps}
          className=" text text-[10vw]  leading-none uppercase font-montserrat font-semibold pr-34"
        >
          Virtual Octopus Ai
        </motion.h1>
        <motion.h1
          {...animationProps}
          className="text text-[10vw]  leading-none uppercase font-montserrat font-semibold pr-34"
        >
          Virtual Octopus Ai
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

