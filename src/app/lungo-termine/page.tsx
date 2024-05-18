import DittaIndividualeForm from "@/components/Forms/DittaIndividualeForm";
import LiberoProfessionistaForm from "@/components/Forms/LiberoProfessionistaForm";
import PensionatoForm from "@/components/Forms/PensionatoForm";
import PersoneFisicheDipendentiForm from "@/components/Forms/PersoneFisicheDipendentiForm";
import SocietaCapitaliForm from "@/components/Forms/SocietaCapitaliForm";
import SocietaCooperativaForm from "@/components/Forms/SocietaCooperativaForm";
import SocietaPersoneForm from "@/components/Forms/SocietaPersoneForm";
import Hero from "@/components/Hero";

import {
  Accordion,
  Item,
} from "@/components/accordion";

import { Toaster } from "@/components/toast/toaster";
import { CarImage, HeroImage } from "@/constants";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import React from "react";

const AccordionItems = [
  {
    label: "Ditta individuale",
    content: <DittaIndividualeForm />,
  },
  {
    label: "Libero professionista",
    content: <LiberoProfessionistaForm />,
  },
  {
    label: "Società persone",
    content: <SocietaPersoneForm />,
  },
  {
    label: "Società capitali",
    content: <SocietaCapitaliForm />,
  },
  {
    label: "Società cooperativa",
    content: <SocietaCooperativaForm/>,
  },
  {
    label: "Persone fisiche dipendenti",
    content: <PersoneFisicheDipendentiForm />,
  },
  {
    label: "Pensionato",
    content: <PensionatoForm />,
  },

];


async function LungoTermine() {

  const client = createClient();
  const page = await client.getSingle('lungotermine');
  return (
    <div className=" min-h-screen">
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

      <section className="w-full flex justify-center items-center">
        {/** react use form e zod for validation */}
        <div className=" md:w-[80%] w-full max-w-screen-mpconstd">
          <Accordion type="single" collapsible className="w-full">
            {AccordionItems.map((item: any, index: number) => (
              <Item underline={false} label={item.label} itemNumber={index + 1} key={index}>
                {item.content}
              </Item>
            ))}
          </Accordion>
        </div>
      </section>
      <Toaster />
    </div>
  );
}

export default LungoTermine;
