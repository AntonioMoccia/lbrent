import Image, { StaticImageData } from "next/image";
import { HeroImage } from "../constants";
import clsx from "clsx";
import React from "react";
import { ImageField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface HeroProps {
  image: ImageField<never>;
  h1: RichTextField;
  p?: RichTextField ;
  fullScreen: boolean;
  reverse?:boolean
}

function Hero({ image, h1, p, fullScreen = true, reverse = false }: HeroProps) {
  return (
    <section
      className={clsx(
        ` 
            bg-black justify-start flex flex-col items-center overflow-hidden lg:pt-10
            rounded-t-3xl text-white`,
            fullScreen ? `h-[calc(100vh-5rem)]` : `h-1/2`,
            reverse ? ` flex-col-reverse justify-end lg:justify-start gap-5 lg:flex-col` : `flex-col`
      )}
    >
          <div className=" relative w-full max-w-2xl">

      <Image
        alt={image.alt!}
        className=" w-full max-w-screen-lg  rounded-t-3xl"
        src={image.url as string}
        height={image.dimensions?.height}
        width={image.dimensions?.width}
        
        />
        </div>
<div>

      <div className=" text-[#B11000] font-extrabold text-2xl text text-center pt-14 max-w-screen-sm w-full leading-[-1%]">
      <PrismicRichText field={h1} />
      </div>

        <div className=" text-center font-medium py-2 tracking-wide">
          <PrismicRichText field={p} />
          </div>

        </div>
    </section>
  );
}

export default Hero;
