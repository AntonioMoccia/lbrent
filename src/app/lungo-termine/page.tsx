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

function LungoTermine() {
  return (
    <div>
      <Hero
        imageSrc={CarImage}
        fullScreen={false}
        h1={
          <>
            NOLEGGIO
            <br /> LUNGO TERMINE
          </>
        }
        p={""}
      />
      <section className=" bg-black w-full flex justify-center py-5">
        <p className=" text-white font-extralight text-center px-4 pt-8 max-w-screen-lg">
          Scopri i vantaggi del noleggio a lungo termine e goditi
          l&apos;esperienza di avere un&apos;auto sempre a tua disposizione,
          abbattendo i costi legati all&apos;acquisto, alla proprietà e alla
          manutenzione. <br />
          <br />
          Con il noleggio a lungo termine, potrai beneficiare di un canone
          mensile fisso concordato e scegliere il modello di auto che preferisci
          tra una vasta gamma di opzioni sul mercato
        </p>
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
