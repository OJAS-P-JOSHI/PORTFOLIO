import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full pt-32 px-4 md:px-auto pb-4 relative overflow-hidden"
      id="contact"
    >
      <div className="w-full absolute left-0 top-0 h-screen">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Have a <span className="text-purple-300">project</span> in mind?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:koustav.manna98@gmail.com" className="md:mt-10">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Koustav Manna
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <Link
              href={info.cta}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="icons"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className="w-5 h-5  "
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
