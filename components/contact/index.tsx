"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import { Button, Input, Link, Textarea } from "@nextui-org/react";
import { sendEmail } from "@/actions/send-email";

function Contact() {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);
  const [info, setInfo] = useState({ senderEmail: "", message: "" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-zinc-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <Link
          href="mailto:carljerrickl@gmail.com"
          color="foreground"
          underline="always"
        >
          carljerrickl@gmail.com
        </Link>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black">
        <Input
          name="senderEmail"
          value={info.senderEmail || ""}
          variant="faded"
          placeholder="Your email"
          radius="lg"
          type="email"
          classNames={{
            inputWrapper: [
              "border",
              "border-black/10",
              "bg-white",
              "px-4",
              "dark:bg-zinc-50",
              "h-14",
            ],
          }}
          maxLength={500}
          onChange={(e) => {
            setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <Textarea
          name="message"
          value={info.message || ""}
          variant="faded"
          placeholder="Your message"
          radius="lg"
          minRows={10}
          maxRows={10}
          className="my-3"
          classNames={{
            inputWrapper: [
              "border",
              "border-black/10",
              "bg-white",
              "p-4",
              "dark:bg-zinc-50",
            ],
          }}
          maxLength={5000}
          onChange={(e) => {
            setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <Button
          type="submit"
          color="primary"
          className="group flex items-center justify-center h-[3rem] w-[8rem] bg-zinc-900 text-white rounded-full outline-none transition-all hover:scale-110 dark:bg-white/10 disabled:scale-100"
          isDisabled={pending}
          onClick={async (e) => {
            e.preventDefault();

            try {
              setPending(true);

              if (!info.senderEmail) {
                toast("Email is required.", { icon: "ℹ️" });
                setPending(false);
                return;
              }

              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

              if (!emailRegex.test(info.senderEmail)) {
                toast("Invalid email address.", { icon: "ℹ️" });
                setPending(false);
                return;
              }

              if (!info.message) {
                toast("Message is required.", { icon: "ℹ️" });
                setPending(false);
                return;
              }

              const formData = new FormData();
              formData.append("senderEmail", info.senderEmail);
              formData.append("message", info.message);

              await sendEmail(formData);

              toast("Your message has been sent.", { icon: "✅" });

              setPending(false);

              setInfo({ senderEmail: "", message: "" });
            } catch (error) {
              toast("Something went wrong.", { icon: "❌" });
            }
          }}
        >
          {pending ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              Submit
              <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all " />
            </>
          )}
        </Button>
      </form>
    </motion.section>
  );
}

export default Contact;
