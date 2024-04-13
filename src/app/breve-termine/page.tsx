import Hero from "@/components/Hero";
import { Cards, HeroImage } from "@/constants";
import CardList from "@/components/CardList";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

async function BreveTermine() {
  const client = createClient();
  const page = await client.getSingle("breveTermine");

  function filterSliceByType(type: string) {
    return page.data.slices.filter((slice) => slice.slice_type === type)[0];
  }
  return (
    <div>
      <section>
        <Hero
          image={page.data.image}
          fullScreen={false}
          h1={page.data.titolo}
          p={""}
        />
      </section>
      <section className=" bg-black w-full flex justify-center py-5">
        <div className=" text-white font-extralight text-center px-4 pt-8 max-w-screen-lg">
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
