import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Map from "@/components/Map";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import Slider from "@/components/Slider";
import { PrismicRichText } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");

  function filterSliceByType(type: string) {
    return page.data.slices.filter((slice) => slice.slice_type === type)[0];
  }
  return (
    <>
      <Hero
        reverse
        fullScreen={true}
        image={page.data.image}
        h1={page.data.spot_titolo}
        p={page.data.spot_subtitle}
        homePageAnimation
      />

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
    </>
  );
}
/*
          <h1>{page.data.spot_titolo}</h1>
        <p>{page.data.spot_subtitle}</p>
*/
