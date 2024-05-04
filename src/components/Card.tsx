import { Content } from "@prismicio/client";

import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import _ from 'lodash'
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

  return (
    <>
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
        <div className="  relative top-0">
          <Image
            alt={"image"}
            height={image.dimensions?.height}
            width={image.dimensions?.width}
            src={image.url!}
          />
        </div>

        <div className=" w-full gap-1 relative top-0 flex flex-wrap">
          <div className="text-[0.5rem] bg-gray-200 px-2 py-1 rounded-lg flex items-center justify-around gap-2">
            <span>
              <LuUser2 />
            </span>
            {posti}
          </div>

          <div className="flex font-semibold gap-1">
            <div className=" text-[0.5rem] bg-gray-200 px-2 py-1 rounded-lg">
              A/ {cambio}
            </div>
            <div className=" text-[0.5rem] bg-gray-200 px-2 py-1 rounded-lg">
              D/ {carburante}
            </div>
          </div>
        </div>
      </div>
      { !_.isEmpty(secondimage) && !_.isEmpty(thirdimage) ? isOpenedSlider && (
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
          <div onClick={()=>setIsOpenedSlider(false)} className=" opacity-95  bg-black w-full h-full flex justify-center items-center"/>
          <div className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full lg:w-3/4 z-50">
            <Slider
              data={{
                items: [
                  {
                    gallery_image: image,
                  },
                  {
                    gallery_image: secondimage,
                  },
                  {
                    gallery_image: thirdimage,
                  },
                ],
              }}
            />
          </div>
        </div>
      ):null}
    </>
  );
}

export default Card;
