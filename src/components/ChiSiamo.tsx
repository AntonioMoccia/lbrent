import { Content } from "@prismicio/client";
import {PrismicRichText} from "@prismicio/react";

function ChiSiamo({ data }: { data: Content.ChiSiamoSlice }) {


  return (
    <section className=" min-h-screen bg-black text-white flex flex-col gap-8 items-center justify-center">
      {/**TESTP DI CHI SIAMO */}
      <h1 className=" uppercase text-center  font-bold text-2xl">Chi siamo</h1>
      <div className=" px-6 max-w-screen-lg text-center font-thin ">
        {/*         L&apos;autonoleggio con sede a Grottaminarda nasce dall&apos;idea di un
        giovane imprenditore determinato a introdurre innovazione nella
        provincia di Avellino. Passo dopo passo, abbiamo ampliato la nostra
        flotta acquisendo diverse macchine di ultima generazione conformi alle
        normative vigenti.
        <br />
        <br />
        Il parco auto è adatto a qualsiasi fascia di pubblico infatti troverai:{" "}
        <strong>utilitarie, crossover, suv, auto sportive e luxury car.</strong>
        La nostra missione è fare in modo che tutti possano provare il piacere
        di guidare l&apos;auto dei propri sogni. */}
        <PrismicRichText field={data?.primary.chi_siamo_text} />
      </div>
      {/**LABELS */}
      <div className=" flex w-full justify-around max-w-screen-sm mt-10">
        <div className=" text-2xl items-center gap-2 flex flex-col">
          <span className=" font-bold">
          + 30
          </span>
          <span className=" text-sm">Auto in pronta consegna</span>
        </div>

     
      </div>
      
    </section>
  );
}

export default ChiSiamo;
