import { Content } from "@prismicio/client";

import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

function Card({
  titolo,
  image,
  neopatentati,
  posti,
  carburante,
  cambio,
}: Content.CarListSliceDefaultItem) {
  return (
    <div className=" bg-black rounded-2xl items-start flex flex-col justify-between py-3 px-2 border-2 max-h-60 max-w-60 border-white min-h-60">
      <div className=" relative top-0 min-h-[3rem]">
        <h1 className=" text-[70%] font-bold text-white">{titolo}</h1>
        {neopatentati && (
          <span className=" text-[0.5rem]  bg-lime-400 px-2 py-1 rounded-md">
            Neopatentato
          </span>
        )}
      </div>
      <div className="  relative top-0">
        <Image alt={"image"} height={image.dimensions?.height} width={image.dimensions?.width} src={image.url!} />
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
  );
}

export default Card;
