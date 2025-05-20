"use client";

import React, { Fragment, useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(0, 0)
              : gsap.utils.random(0, 0);
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

  const skills = [
    { tech_color: "text-red-400", tech_name: "Java" },
    { tech_color: "text-yellow-300", tech_name: "JavaScript" },
    { tech_color: "text-orange-400", tech_name: "TypeScript" },
    { tech_color: "text-green-400", tech_name: "Node.js" },
    { tech_color: "text-purple-300", tech_name: "Next.js" },
    { tech_color: "text-blue-300", tech_name: "React.js" },
    { tech_color: "text-blue-600", tech_name: "Tailwind CSS" },
    { tech_color: "text-green-300", tech_name: "Spring Boot" },
    { tech_color: "text-teal-400", tech_name: "Open CV" },
    { tech_color: "text-red-500", tech_name: "NLP" },
    { tech_color: "text-cyan-500", tech_name: "Deep Learning" },
    { tech_color: "text-orange-500", tech_name: "Machine Learning" },
  ];

  return (
    <section
      className="wrapper overflow-hidden p-2 md:p-0 relative -top-32"
      ref={component}
    >
      {skills.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-4 md:mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, i) => (
            <Fragment key={i}>
              <span
                className={`tech-item text-4xl md:text-6xl font-extrabold uppercase tracking-tighter min-w-max ${
                  i === 7 ? tech_color : "text-inherit"
                }`}
              >
                {tech_name}
              </span>
              <span className="text-2xl md:text-3xl">
                <MdCircle />
              </span>
            </Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
