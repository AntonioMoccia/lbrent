import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Map from "@/components/Map";
import { HeroImage } from "@/constants";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section>
        <div className="h-[calc(100vh-5rem)] overflow-hidde flex justify-center items-center">
          <Image fill objectFit="cover" className=" object-cover object-left" src={HeroImage} alt={"alt img"} />
        </div>
        SCEGLI LA TUA AUTO,
        <br />
        ALLACCIA LA CINTURA,
        <br />E INIZIA IL TUO VIAGGIO.
        <p> LB Rent il piacere di guidare senza pensieri.</p>
      </section>
      <ChiSiamo />
      <Map />
    </main>
  );
}
