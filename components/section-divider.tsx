"use client";

import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      className="bg-zinc-300 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
      }}
    />
  );
}

export default SectionDivider;
