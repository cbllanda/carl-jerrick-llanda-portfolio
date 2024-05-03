"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaFacebook } from "react-icons/fa6";
import toast from "react-hot-toast";

import { Button } from "@nextui-org/button";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSessionContext } from "@/context/active-section-context";

function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSessionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/cj.jpg"
              alt="Carl Jerrick Llanda's Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              draggable={false}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">
            Hello, I&apos;m Carl Jerrick Llanda.
          </span>{" "}
          A <span className="font-bold">Information Technology Undergrad</span>{" "}
          who <span className="font-bold">loves</span> building sites & apps. My
          focus is <span className="font-bold underline">React (Next.js)</span>.
        </motion.h1>
      </div>

      <motion.div
        className="inline-flex flex-col sm:flex-row gap-3 px-4 text-lg font-medium items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button
          as={Link}
          color="primary"
          href="#contact"
          radius="full"
          className="group bg-zinc-900 dark:bg-zinc-950 px-7 py-3 hover:scale-110 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          endContent={
            <ArrowRight className="group-hover:translate-x-1 transition" />
          }
        >
          Contact me
        </Button>

        <Button
          // as={Link}
          onPress={(e) => toast("Coming soon!", { icon: "😊" })}
          radius="full"
          className="group bg-zinc-50 px-7 py-3 hover:scale-110 transition border border-black/10 dark:bg-white/10"
          endContent={
            <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          }
        >
          View Blogs
        </Button>

        <Button
          as={Link}
          isIconOnly
          href="https://www.facebook.com/carljerrick.llanda/"
          radius="full"
          className="group bg-zinc-50 hover:scale-[1.15] transition border border-black/10 dark:bg-white/10"
          target="_blank"
        >
          <FaFacebook className="h-[1.2rem] w-[1.2rem] group-hover:scale-[1.15] transition" />
        </Button>

        <Button
          as={Link}
          isIconOnly
          href="https://github.com/cbllanda"
          radius="full"
          className="group bg-zinc-50 hover:scale-[1.15] transition border border-black/10 dark:bg-white/10"
          target="_blank"
        >
          <FaGithub className="h-[1.2rem] w-[1.2rem] group-hover:scale-[1.15] transition" />
        </Button>
      </motion.div>
    </section>
  );
}

export default Intro;
