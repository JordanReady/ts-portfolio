import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `TechList`.
 */
const TechList = (): JSX.Element => {
  const component = useRef(null);

  const techListData = {
    items: [
      { tech_name: "React" },
      { tech_name: "TypeScript" },
      { tech_name: "JavaScript" },
      { tech_name: "TailwindCSS" },
      { tech_name: "Bootstrap" },
      { tech_name: "Firebase" },
      { tech_name: "Ruby" },
      { tech_name: "Rails" },
    ],
  };

  const gradientTextStyle = {
    backgroundClip: "text",
    backgroundImage: "linear-gradient(to bottom right, #8B5CF6, #2563EB)",
    color: "transparent",
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section className="wrapper overflow-hidden" ref={component}>
      {techListData.items.map(({ tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-600"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-xl md:text-3xl font-extrabold uppercase tracking-tighter "
                }
                style={index === 7 ? gradientTextStyle : {}}
              >
                {tech_name}
              </span>
              <span className="text-xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
