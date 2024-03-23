import { StaticImageData } from "next/image";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
interface CardProps {
  title: string;
  image: StaticImageData;
  neopatentato: boolean;
  posti: number;
  carburante: string;
  cambio: string;
}

function Card({
  title,
  image,
  neopatentato,
  posti,
  carburante,
  cambio,
}: CardProps) {
  return (
    <div className=" bg-black rounded-2xl flex flex-col justify-between py-3 px-3 border-2 border-white min-h-60">
      <div className=" relative top-0">
        <h1 className=" text-[70%] font-bold text-white">{title}</h1>
        {neopatentato && (
          <span className=" text-[0.5rem]  bg-lime-400 px-2 py-1 rounded-md">
            Neopatentato
          </span>
        )}
      </div>
      <div className="  relative top-0">
        <Image alt={"image"} src={image} />
      </div>
      <div className="  text gap-2">
        <div className="text-[0.5rem] flex bg-gray-200 px-1 py-1 rounded-md">
          <LuUser2 />
          <span>2</span>
        </div>
        <br />
        <span className="text-[0.5rem]  bg-gray-200 px-1 py-1 rounded-md">
          <strong>A</strong>/ Automatic
        </span>
        <span className="text-[0.5rem]  bg-gray-200 px-1 py-1 rounded-md">
          <strong>A</strong>/ Automatic
        </span>
      </div>
    </div>
  );
}

export default Card;
