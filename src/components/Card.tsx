import { Content } from "@prismicio/client";

import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import Slider, { SlideNextButton, SlidePrevButton } from "./Slider";
import { Suspense, useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import TransmissionIcon from "./TransmissionIcon";
import { SkeletonCard } from "./SkeletonCard";
import { FuelIcon } from "lucide-react";
function Card({
  titolo,
  image,
  neopatentati,
  posti,
  carburante,
  cambio,
  thirdimage,
  secondimage,
}: Content.CarListSliceDefaultItem) {
  const [isOpenedSlider, setIsOpenedSlider] = useState(false);

    useEffect(() => {
    const disableScroll = ()=>{}

    let scrollDisabled;

    if(isOpenedSlider){
      document.body.style.overflowY='hidden'
    }else{
      document.body.style.overflowY='auto'
    }
  }, [isOpenedSlider]);
  return (
    <Suspense fallback={<SkeletonCard />}>
      <div
        onClick={() => setIsOpenedSlider(true)}
        className=" bg-black rounded-2xl items-start flex flex-col justify-between py-3 px-2 border-2 max-h-60 max-w-60 border-white min-h-60"
      >
        <div className=" relative top-0 min-h-[3rem]">
          <h1 className=" text-[70%] font-bold text-white">{titolo}</h1>
          {neopatentati && (
            <span className=" text-[0.5rem]  bg-lime-400 px-2 py-1 rounded-md">
              Neopatentato
            </span>
          )}
        </div>
        <div className=" cursor-pointer h-[65%] pb-2 relative top-0">
          <Image
            className="h-full rounded object-cover object-center"
            quality={60}
            priority={true}
            objectFit=" cover"
            objectPosition=" center"
            alt={"image"}
            height={image.dimensions?.height}
            width={image.dimensions?.width}
            src={image.url!}
          />
        </div>

        <div className=" w-full gap-1 relative top-0 flex flex-wrap">
          <div className="text-[0.5rem] bg-gray-200 px-2 py-1 rounded-lg flex items-center justify-around gap-2">
            <span>
              <LuUser2 className="h-3 w-3" />
            </span>
            {posti}
          </div>

          <div className="flex font-semibold gap-1">
            <div className=" gap-1 text-[0.5rem] bg-gray-200 flex px-2 py-1 rounded-lg">
              <span className="h-3 w-3">
                <TransmissionIcon />
              </span>{" "} {cambio}
            </div>
            <div className=" gap-1 text-[0.5rem] bg-gray-200 flex px-2 py-1 rounded-lg">
              <span className="h-3 w-3">
                <FuelIcon className=" w-full h-full" />
              </span>{" "} {carburante}
            </div>
          </div>
        </div>
      </div>
      {!_.isEmpty(secondimage) || !_.isEmpty(thirdimage)
        ? isOpenedSlider && (
            <div
              onClick={(e) => {}}
              className=" h-screen w-screen z-30 fixed top-0 left-0 "
            >
              <div className="absolute right-5 top-5 z-50">
                <IoCloseCircle
                  onClick={() => {
                    setIsOpenedSlider(false);
                  }}
                  size={40}
                  className=" text-white"
                />
              </div>
              <div
                onClick={() => setIsOpenedSlider(false)}
                className=" opacity-95  bg-black w-full h-full flex justify-center items-center"
              />
              <div className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full lg:w-3/4 z-50">
                <div id="card-slider" className="w-full p-4 lg:p-0 min-h-60">
                  <Swiper
                    className="  h-full"
                    spaceBetween={10}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className=" flex justify-center items-center flex-col w-auto h-full">
                        <Image
                          className=" h-full w-auto object-contain"
                          quality={60}
                          priority={true}
                          height={image.dimensions?.height}
                          width={image.dimensions?.width}
                          src={image.url!}
                          alt={image.alt!}
                        />
                      </div>
                    </SwiperSlide>
                    {!_.isEmpty(secondimage) && (
                      <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col w-auto h-full">
                          <Image
                            quality={60}
                             priority={true}
                            height={secondimage.dimensions?.height}
                            width={secondimage.dimensions?.width}
                            src={secondimage.url!}
                            alt={secondimage.alt!}
                            className=" h-full w-auto object-contain"
                          />
                        </div>
                      </SwiperSlide>
                    )}
                    {!_.isEmpty(thirdimage) && (
                      <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col w-auto h-full">
                          <Image
                            quality={60}
                            priority={true}
                            height={thirdimage.dimensions?.height}
                            width={thirdimage.dimensions?.width}
                            src={thirdimage.url!}
                            alt={thirdimage.alt!}
                            className=" h-full w-auto object-contain"
                          />
                        </div>
                      </SwiperSlide>
                    )}
                    <SlidePrevButton />
                    <SlideNextButton />
                  </Swiper>
                </div>
              </div>
            </div>
          )
        : null}
    </Suspense>
  );
}

export default Card;
