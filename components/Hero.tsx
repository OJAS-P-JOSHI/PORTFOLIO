import { Spotlight } from "./ui/Spotlight";
import linkednlnImage from "../public/ojas.png";
import Image from "next/image";
import { FlipWords } from "./ui/FlipWords";
import ShootingStars from "./ui/ShootingStars";
import dynamic from "next/dynamic";

const ContainerScroll = dynamic(
  () =>
    import("./ui/container-scroll-animation").then(
      (data) => data.ContainerScroll
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Hero = () => {
  const words = ["better", "responsive", "beautiful", "modern"];
  return (
    <div className="relative pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-portfolio-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-portfolio-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex flex-col overflow-hidden z-10">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-neutral-600 dark:text-neutral-400">
                Build <FlipWords words={words} /> websites & apps with <br />
                <span
                  className="text-4xl md:text-[6rem] font-bold mt-1 leading-none animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-yellow-200 dark:via-yellow-300 dark:to-yellow-400"
                  style={{ fontFamily: "Gumela, sans-serif" }}
                >
                  OJAS P JOSHI
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={linkednlnImage}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            priority
          />
        </ContainerScroll>
      </div>
      <ShootingStars />
    </div>
  );
};

export default Hero;
