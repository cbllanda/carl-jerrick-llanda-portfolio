import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";

type ExperienceElementProps = {
  item: {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
  };
};

function ExperienceElement({ item }: ExperienceElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === "light" ? "#fafafa" : "rgba(255, 255, 255, 0.05)",
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "#fafafa",
          color: "#18181b",
          fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0 font-medium !text-sm">{item.location}</p>
        <p className="!mt-2 !font-normal text-zinc-700 dark:text-white/70">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}

export default ExperienceElement;
