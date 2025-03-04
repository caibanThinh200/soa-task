"use client";

import { Page } from "@/types/page";
import Image from "next/image";
import { motion } from "motion/react";

interface HeroProps {
  data: Page["banner_title"];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const icons = ["/svg/mountain.svg", "/svg/whale.svg", "/svg/aim.svg"];
  return (
    <div className="relative lg:h-[100vh] h-screen">
      <div className="absolute w-full h-full inset-0">
        <video
          controls={false}
          autoPlay={true}
          loop
          className="w-full h-full object-cover"
          muted
          poster="/images/hero-poster.png"
          playsInline
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
          <track
            src="captions_fr.vtt"
            kind="captions"
            srcLang="fr"
            label="spanish_captions"
          />
        </video>
      </div>
      <div className="relative z-10 h-full w-full lg:p-20 py-10  pb-16 bg-gradient-to-t from-[rgba(0,0,0,0.30)_14.5%] to-[rgba(0,0,0,0.00)_27%]">
        <div className="flex flex-col justify-end size-full">
          <div className="flex md:justify-around justify-between items-center">
            {data?.map((item, index) => (
              <motion.div
                key={item}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 * (index + 1),
                }}
                className="flex flex-col gap-2 items-center cursor-pointer group"
              >
                <Image
                  src={icons[index]}
                  width={28}
                  height={28}
                  alt="mountain"
                  className="group-hover:scale-125 transition duration-300 ease-in-out"
                />
                <p className="text-white md:text-base text-xs text-center w-5/6">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
