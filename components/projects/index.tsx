"use client";

import React from "react";

import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ProjectArticles from "@/components/projects/project-articles";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectArticles {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
