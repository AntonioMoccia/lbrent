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
    <div>
      <Hero
        image={page.data.image}
        fullScreen={false}
        h1={
          page.data.titolo
        }
        p={""}
      />
      <section className=" bg-black w-full flex justify-center py-5">
        <div className=" text-white font-extralight text-center px-4 pt-8 max-w-screen-lg">
       <PrismicRichText field={page.data.descrizione} />
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        {/** react use form e zod for validation */}
        <div className=" md:w-[80%] w-full max-w-screen-mpconstd">
          <Accordion type="single" collapsible className="w-full">
            {AccordionItems.map((item: any, index: number) => (
              <Item label={item.label} itemNumber={index + 1} key={index}>
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
