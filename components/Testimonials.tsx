import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <section className="mb-10 mt-36">
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="mb-10">
          <p className="text-3xl md:text-5xl font-semibold text-center textGradient-3">
            Kind words from my teammates & clients
          </p>
        </div>
        <div className="h-auto max-h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
