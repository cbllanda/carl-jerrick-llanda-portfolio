"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { projectsData } from "@/lib/data";

type ProjectArticlesProps = (typeof projectsData)[number];

function ProjectArticles({
  title,
  description,
  tags,
  imageUrl,
}: ProjectArticlesProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-zinc-50 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-zinc-200 transition sm:group-even:pl-8 shadow-lg dark:bg-white/[0.05] dark:text-white dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-zinc-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-zinc-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-zinc-950 dark:text-white/80"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project Worked On"
          quality={95}
          draggable={false}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
          transition
          group-hover:scale-[1.04] 
          group-hover:-translate-x-3 
          group-hover:translate-y-3
          group-hover:-rotate-2 
          group-even:right-[inital] 
          group-even:-left-40 
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2 
          "
        />
      </article>
    </motion.div>
  );
}

export default ProjectArticles;
