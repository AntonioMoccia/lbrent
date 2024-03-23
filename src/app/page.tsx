import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Map from "@/components/Map";
import { HeroImage } from "@/constants";
export default function Home() {
  return (
    <main>
      <Hero
        fullScreen={true}
        imageSrc={HeroImage}
        h1={
          <>
            SCEGLI LA TUA AUTO,
            <br />
            ALLACCIA LA CINTURA,
            <br />E INIZIA IL TUO VIAGGIO.
          </>
        }
        p={" LB Rent il piacere di guidare senza pensieri."}
      />
      <ChiSiamo />
      <Map />
    </main>
  );
}
