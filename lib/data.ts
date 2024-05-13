import React from "react";
import { useTheme } from "next-themes";
import { GraduationCap, Star } from "lucide-react";

import curate from "@/public/curate.jpeg";
import reckon from "@/public/reckon.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Curate",
    description:
      "A web-based blog app for university students. It has abundance of features such as rich text editor.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: curate,
  },
  {
    title: "Reckon",
    description:
      "A web-based application that calculates the CPU scheduling process inputted by the user based on the selected algorithm.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "NextUI"],
    imageUrl: reckon,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Node.js",
  "React",
  "Next.js",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "Framer Motion",
  "ShadCN UI",
  "NextUI",
] as const;

export const experiencesData = [
  {
    title: "Polishing Skill",
    location: "Vigan City",
    description:
      "While learning as a Information Technology undergrad, I started freelance coding. Immersing myself through experience.",
    icon: React.createElement(Star),
    date: "2021",
  },
  {
    title: "To be Continued",
    location: "",
    description: "",
    icon: React.createElement(GraduationCap),
    date: "",
  },
] as const;
