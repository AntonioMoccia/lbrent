import Form from "@/components/Forms/Form";
import Hero from "@/components/Hero";
import { HeroImage } from "@/constants";
import React from "react";

function LungoTermine() {
  return (
    <div>
      <Hero
        imageSrc={HeroImage}
        fullScreen={false}
        h1={
          <>
            NOLEGGIO
            <br /> BREVE TERMINE
          </>
        }
        p={""}
      />
      <section className=" bg-black w-full flex justify-center py-5">
        <p className=" text-white font-extralight text-center px-4 pt-8 max-w-screen-lg">
          Scopri i vantaggi del noleggio a lungo termine e goditi
          l&apos;esperienza di avere un&apos;auto sempre a tua disposizione,
          abbattendo i costi legati all&apos;acquisto, alla proprietà e alla
          manutenzione. <br /><br />Con il noleggio a lungo termine, potrai beneficiare di
          un canone mensile fisso concordato e scegliere il modello di auto che
          preferisci tra una vasta gamma di opzioni sul mercato
        </p>
      </section>
      <section>
        {/** react use form e zod for validation */}
        <Form />
      </section>
    </div>
  );
}

export default LungoTermine;
