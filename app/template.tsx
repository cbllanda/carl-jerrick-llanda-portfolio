"use client";

import { motion } from "framer-motion";

import useScrollProgress from "@/components/ui/use-scroll-progress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-zinc-800 dark:bg-white/80 w-1 top-0 left-0 bottom-0 translate-all duration-700"
      ></span>
    </>
  );
};

export default Template;
