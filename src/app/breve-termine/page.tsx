import Hero from "@/components/Hero";
import { Cards, HeroImage } from "@/constants";
import CardList from "@/components/CardList";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

async function BreveTermine() {
  const client = createClient();
  const page = await client.getSingle("breveTermine");

  function filterSliceByType(type: string) {
    return page.data.slices.filter((slice) => slice.slice_type === type)[0];
  }
  return (
    <div>
      <section
        className={`bg-black justify-start flex flex-col items-center lg:pt-10
         rounded-t-3xl text-white h-1/2 `}
      >
        <div className=" relative lg:w-[45vw] w-full max-h-[calc(50vh-5rem)] lg:min-h-0  min-h-[250px] lg:max-h-screen ">
          <Image
            alt={page.data.image.alt!}
            id="home-image"
            className=" w-full max-w-screen-lg rounded-t-3xl "
            src={page.data.image.url as string}
            height={page.data.image.dimensions?.height}
            width={page.data.image.dimensions?.width}
          />
        </div>
        <div className=" relative mt-0 lg:mt-5">
          <div
            id={"title"}
            className=" text-[#B11000]  lg:max-h-screen font-extrabold text-2xl min-h-20 max-h-[calc(50vh-5rem)] text-center  max-w-screen-sm w-full leading-[-1%]"
          >
            <PrismicRichText field={page.data.titolo} />
          </div>

        </div>
      </section>
      <section className=" bg-black w-full flex justify-center ">
        <div className=" text-white font-extralight text-center px-4 py-10  max-w-screen-lg">
          <PrismicRichText field={page.data.descrizione} />
        </div>
      </section>
      <section>
        <CardList Cards={filterSliceByType("car_list")} />
      </section>
    </div>
  );
}

export default BreveTermine;
