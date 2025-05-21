"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { theme } from "../lib/theme";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlinePsychology } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { BsCode } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".category-section", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: component.current,
          start: "top center",
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Web Technologies",
      icon: <RiComputerLine className="text-4xl" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Tailwind CSS", level: 90 },
      ],
      gradient: theme.colors.gradients.primary,
    },
    {
      title: "AI & ML",
      icon: <MdOutlinePsychology className="text-4xl" />,
      skills: [
        { name: "Deep Learning", level: 85 },
        { name: "NLP", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "Machine Learning", level: 85 },
        { name: "Neural Networks", level: 78 },
      ],
      gradient: theme.colors.gradients.glow,
    },
    {
      title: "Backend & Database",
      icon: <FaDatabase className="text-4xl" />,
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "Java", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 85 },
      ],
      gradient: "from-emerald-400 to-cyan-400",
    },
    {
      title: "Programming",
      icon: <BsCode className="text-4xl" />,
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "Go", level: 75 },
      ],
      gradient: "from-orange-400 to-red-400",
    },
  ];

  return (
    <section id="skills" className="mx-2 md:mx-0 my-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          Skills
        </h1>
        <div ref={component} className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="category-section">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`bg-gradient-to-r ${category.gradient} p-3 rounded-lg`}
                >
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative overflow-hidden rounded-lg p-4 hover:shadow-2xl 
                             transition-all duration-500 bg-slate-900/5 hover:bg-slate-900/10
                             backdrop-blur-sm border border-slate-900/10"
                  >
                    <div className="relative z-10">
                      <h3 className="font-semibold mb-2">{skill.name}</h3>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} 
                                    transition-all duration-500 group-hover:scale-x-105`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm mt-1 opacity-60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                                  via-white/5 to-transparent opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-500 -skew-x-12" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
