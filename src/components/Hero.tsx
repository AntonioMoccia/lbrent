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
}

function Hero({ image, h1, p, fullScreen = true }: HeroProps) {
  useEffect(() => {
    const subtitle = new SplitType("#home-subtitle > p", {
      wordClass: "title-word",
      lineClass: "title-line",
    });

    const scrollDown = new SplitType("#scroll-down", {
      wordClass: "title-word",
      lineClass: "title-line",
    });
    const timeline = gsap.timeline();
    timeline
      .to("#home-subtitle .title-word > div", {
        stagger: 0.03,
        alpha: 1,
        delay: 0.5,
      })
      .fromTo(
        "#home-image",
        {
          alpha: 0,
        },
        {
          alpha: 1,
        }
      )

      .to("#scroll-down-icon", {
        alpha: 1,
      })
      .to("#scroll-down  .title-word > div", {
        stagger: 0.03,
        alpha: 1,
      });
  }, []);

  return (
    <>
      <section
        className={` py-6 rounded-t-3xl gap-5 bg-black flex items-center text-white h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] min-h-[600px] justify-around lg:justify-start flex-col`}
      >
        <div className="flex max-h-full items-center flex-col-reverse justify-center lg:justify-start gap-10 lg:flex-col">
          <div className=" w-full flex justify-center items-center ">
            <Image
              alt={image.alt!}
              id="home-image"
              className="rounded-t-3xl max-h-[65vh] w-full md:w-3/4"
              src={image.url as string}
              height={image.dimensions?.height}
              width={image.dimensions?.width}
            />
          </div>

          {/**TESTo */}
          <div className=" flex justify-center gap-2 items-center flex-col">
            <div
              id={"home-title"}
              className=" text-[#B11000]  lg:max-h-screen font-extrabold text-xl md:text-2xl  text-center  max-w-screen-sm w-full leading-[-1%]"
            >
              <PrismicRichText field={h1} />
            </div>

            <div
              id={"home-subtitle"}
              className=" text-center font-medium px-2 tracking-wide"
            >
              <PrismicRichText field={p} />
            </div>
          </div>
        </div>
        {/**SCROLL DOWN */}
        <div>
          <div className=" flex flex-col gap-2 pt-2 justify-center items-center ">
            <SlMouse id="scroll-down-icon" size={30} />
            <span id={"scroll-down"} className=" text-white text-xs">
              scroll down
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
