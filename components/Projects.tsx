import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { companies, projects } from "@/data";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="bg-white dark:bg-gray-800 mx-2 md:mx-0 my-8 mt-10"
      >
        <div className="max-w-6xl mx-auto h-40 bg-white dark:bg-gray-800">
          <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
            Projects
          </h1>
        </div>
        <div
          className="bg-[#F1F1F1] dark:bg-gray-900 -mt-3 py-10"
          style={{ minHeight: "80vh" }} // Setting adequate height
        >
          <HoverEffect items={projects} />
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 my-10 h-40">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 hi gap-2">
              <Image
                src={company.img}
                alt={company.name}
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className="md:w-16 w-10"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Projects;
