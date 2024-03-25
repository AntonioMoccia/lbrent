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
    <div className=" bg-black rounded-2xl items-start flex flex-col justify-between py-3 px-2 border-2 max-h-60 max-w-60 border-white min-h-60">
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
