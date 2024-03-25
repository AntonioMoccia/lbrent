import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { Cards, HeroImage } from "@/constants";
import { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import usePagination from "@/hooks/usePagination";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import Pagination from "@/components/Pagination";
function BreveTermine() {




  return (
    <div>
      <section>
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
      </section>
      <section className=" bg-black w-full flex justify-center py-5">
        <p className=" text-white font-extralight text-center px-4 pt-8 max-w-screen-lg">
          Scopri la libertà di viaggiare con il nostro noleggio a breve termine!
          Con tariffe competitive e una vasta gamma di veicoli moderni e
          affidabili, puoi affittare la tua auto ideale per brevi periodi senza
          complicazioni. Scegli la comodità e la flessibilità del noleggio a
          breve termine e rendi ogni viaggio un&apos;esperienza indimenticabile.
        </p>
      </section>
      <section>
        <CardList Cards={Cards} />
      </section>
    </div>
  );
}

export default BreveTermine;
