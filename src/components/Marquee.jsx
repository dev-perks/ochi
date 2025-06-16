import { motion } from "motion/react";
import React from "react";

export default function Marquee() {
  return (
    <div className="w-full py-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="uppercase font-founders text-[28.472vw] font-normal leading-none -mb-10 -mt-22"
        >
          We are Ochi&nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="uppercase font-founders text-[28.472vw] font-normal leading-none -mb-10 -mt-22"
        >
          We are Ochi&nbsp;
        </motion.h1>
      </div>
    </div>
  );
}
