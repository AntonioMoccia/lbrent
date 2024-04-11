import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Map from "@/components/Map";
import { HeroImage } from "@/constants";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import Slider from "@/components/Slider";
export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");

  function filterSliceByType(type: string) {
    return page.data.slices.filter((slice) => slice.slice_type === type)[0];
  }
  return (
    <main>
      <section>
        <div className="h-[calc(100vh-5rem)] overflow-hidde flex justify-center items-center">
          <Image
            fill
            objectFit="cover"
            className=" object-cover object-left"
            src={page.data.image.url!}
            alt={page.data.image.alt!}
          />
        </div>
        SCEGLI LA TUA AUTO, ALLACCIA LA CINTURA, E INIZIA IL TUO VIAGGIO.
        <p> LB Rent il piacere di guidare senza pensieri.</p>
      </section>
      <ChiSiamo
        data={filterSliceByType("chi_siamo") as Content.ChiSiamoSlice}
      />
      {/** SLIDER */}
      <div className=" w-full flex justify-center items-center bg-black">
        <div className=" max-w-md lg:max-w-4xl ">
          <Slider data={filterSliceByType("gallery") as Content.GallerySlice} />
        </div>
      </div>
      <Map />
    </main>
  );
}
/*
          <h1>{page.data.spot_titolo}</h1>
        <p>{page.data.spot_subtitle}</p>
*/
