"use client";
import { aboutItems } from "@/data";
import { memo, useEffect, useState } from "react";
import BentoGrid from "./ui/BentoGrid";
import BentoGridItem from "./ui/BentoGridItem";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const About = () => {
  const [isInView, ref] = useIntersectionObserver();
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);
  return (
    <section id="about" className="p-2 md:p-0" ref={ref}>
      <BentoGrid className="w-full pb-20">
        {hasLoaded &&
          aboutItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              img={item.img}
              spareImg={item.spareImg}
              className={
                item.id === 1
                  ? "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
                  : [2, 3].includes(item.id)
                  ? "lg:col-span-2 md:col-span-3 md:row-span-2"
                  : item.id === 5
                  ? "md:col-span-3 md:row-span-2"
                  : "lg:col-span-2 md:col-span-3 md:row-span-1"
              }
              titleClassName={
                item.id === 1
                  ? "justify-end"
                  : [2, 4].includes(item.id)
                  ? "justify-start"
                  : item.id === 3
                  ? "justify-center"
                  : item.id === 5
                  ? "justify-end md:justify-start lg:justify-center"
                  : "justify-center md:max-w-full max-w-60 text-center"
              }
              imgClassName={
                item.id === 1
                  ? "w-full h-full"
                  : item.id === 5
                  ? "absolute right-0 bottom-0 md:w-96 w-60"
                  : ""
              }
            />
          ))}
      </BentoGrid>
    </section>
  );
};

export default memo(About);
