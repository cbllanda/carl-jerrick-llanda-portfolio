"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        While studying as a Information Technology undergraduate, I found myself
        immersed to a environment that allowed programming to become a passion
        of mine. That at some point, it pushed me to do freelance coding at my
        spare time. In such way, I indulge myself to a lot of courses and
        activities online along the way.
      </p>
      <p>
        I love the feeling of figuring out a solution to a problem, that is why
        programming aligns so well to how I am as a person. My core stack is{" "}
        <span className="font-bold underline">
          React, Next.js, Node.js, and MongoDB.
        </span>
      </p>
    </motion.section>
  );
}

export default About;
