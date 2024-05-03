import React from "react";
import { GraduationCap, Star } from "lucide-react";

import curate from "@/public/curate.jpeg";

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
    title: "Curate",
    description:
      "A web-based blog app for university students. It has abundance of features such as rich text editor.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: curate,
  },
  {
    title: "Curate",
    description:
      "A web-based blog app for university students. It has abundance of features such as rich text editor.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: curate,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
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
