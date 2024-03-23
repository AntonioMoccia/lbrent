import Image, { StaticImageData } from "next/image";
import { HeroImage } from "../constants";
import clsx from "clsx";
import React from "react";

interface HeroProps {
  imageSrc: StaticImageData;
  h1: string | React.ReactNode;
  p: string | React.ReactNode;
  fullScreen: boolean;
}

function Hero({ imageSrc, h1, p, fullScreen = true }: HeroProps) {
  return (
    <section
      className={clsx(
        ` 
            bg-black justify-start flex flex-col items-center
            rounded-t-3xl text-white`,
            fullScreen ? `h-[calc(100vh-5rem)]` : `h-1/2`
      )}
    >
      <Image
        alt="hero"
        className=" w-full max-w-screen-lg  rounded-t-3xl"
        src={imageSrc ? imageSrc : ""}
      />

      <h1 className=" text-[#B11000] font-extrabold text-2xl text text-center pt-14 max-w-screen-sm w-full leading-[-1%]">
        {h1}
      </h1>
      {p !== "" && (
        <p className=" text-center font-medium py-2 tracking-wide">{p}</p>
      )}
    </section>
  );
}

export default Hero;
