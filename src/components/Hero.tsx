"use client";
import Image, { StaticImageData } from "next/image";
import { HeroImage } from "../constants";
import clsx from "clsx";
import React, { useEffect } from "react";
import { ImageField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import SplitType from "split-type";
import { SlMouse } from "react-icons/sl";

interface HeroProps {
  image: ImageField<never>;
  h1: RichTextField;
  p?: RichTextField;
  fullScreen: boolean;
  reverse?: boolean;
  homePageAnimation?: boolean;
}

function Hero({
  image,
  h1,
  p,
  fullScreen = true,
  reverse = false,
  homePageAnimation = false,
}: HeroProps) {
  useEffect(() => {
    if (!homePageAnimation) return;

    const text = new SplitType("#home-title", {
      wordClass: "title-word",
      lineClass: "title-line",
    });
    const scrollDown = new SplitType("#scroll-down", {
      wordClass: "title-word",
      lineClass: "title-line",
    });
    const timeline = gsap.timeline();
    timeline
      .to("#home-title .title-word > div", {
        y: 0,
        stagger: 0.01,
      })
      .fromTo(
        "img",
        {
          alpha: 0,
        },
        {
          alpha: 1,
        },
        "=-0.5"
      ).to('#scroll-down  .title-word > div',{
        stagger:0.03,
        alpha:1
      });
  }, []);

  return (
    <>
  
      <section
        className={clsx(
          ` 
        bg-black justify-start flex flex-col items-center overflow-hidden lg:pt-10
            rounded-t-3xl text-white `,
          fullScreen ? `min-h-[calc(100vh-5rem)]` : `h-1/2`,
          reverse
            ? ` flex-col-reverse justify-center lg:justify-start  gap-10 lg:flex-col`
            : `flex-col`
        )}
      >
        <div className=" relative lg:w-[45vw] w-full max-h-[calc(50vh-5rem)] lg:min-h-0  min-h-[350px]  lg:max-h-screen ">
          <Image
            alt={image.alt!}
            className=" w-full max-w-screen-lg rounded-t-3xl "
            src={image.url as string}
            height={image.dimensions?.height}
            width={image.dimensions?.width}
          />
        </div>
        <div className=" mt-0 lg:mt-5">
          <div
            id={homePageAnimation ? "home-title" : "title"}
            className=" text-[#B11000]  lg:max-h-screen font-extrabold text-2xl max-h-[calc(50vh-5rem)] text-center  max-w-screen-sm w-full leading-[-1%]"
          >
            <PrismicRichText field={h1} />
          </div>

          <div className=" text-center font-medium py-2 tracking-wide">
            <PrismicRichText field={p} />
          </div>
        </div>
        {homePageAnimation && (

          <div className=" absolute bottom-12 flex flex-col gap-2 justify-center items-center ">

            <SlMouse size={30} />
            <span id={'scroll-down'} className=" text-white text-xs">scroll down</span>
          </div>
        )}
      </section>
    </>
  );
}

export default Hero;
