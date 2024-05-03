"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import ExperienceElement from "@/components/experience/experience-element";

function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const lineColor = theme === "light" ? "#3f3f46" : "#a1a1aa";

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor={lineColor}>
        {experiencesData.map((item, index) => (
          <ExperienceElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
