"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import usePagination from "@/hooks/usePagination";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { map, uniqBy } from 'lodash'
import { Content } from "@prismicio/client";
function CardList({ Cards }: { Cards: Content.CarListSlice }) {
  const [filteredCars, setFilteredCars] = useState(Cards.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(6);

  useEffect(() => {
    const onResize = (e?: Event) => {
      if (window.innerWidth < 768) {
        setCarsPerPage(6);
      } else {
        setCarsPerPage(9);
      }
    };
    onResize()
    const resizeEvent = window.addEventListener("resize",onResize);
    return () => window.removeEventListener("resize", onResize);
  },[]);

  const onSearchChange = (search: string) => {
    if (search == "") {
      setFilteredCars(Cards.items);
    } else {
      let tempCars = Cards.items.filter((car) => {
   
        return car.titolo?.toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim());
      });

      setFilteredCars(tempCars);
    }
  };
  const CheckedFields = [
    'carburante',
    'cambio',
    'segment'
  ]

  /**
   * 
   * ChacklistField
   * ChackListValues
   * Ogni field ha una checklist a se stante con rispettivi valori univoci
   */

  const uniq = map(uniqBy(Cards.items,CheckedFields[0]),(value:any)=>{
    return value[CheckedFields[0]]
  }) 
  

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);
  };

  const { currentItems, pagesNumber } = usePagination({
    data: filteredCars,
    dataPerPage: carsPerPage,
    currentPage,
  });

  return (
    <>
      <section className=" h-32 flex justify-center items-center">
        <SearchBar onSearchChange={onSearchChange} />
      </section>

      <div className=" flex px-1 py-5 flex-col justify-start items-center gap-4 bg-black max-h-[calc(100vh-8rem)] min-h-[750px] ">
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 p-2 h-auto max-w-screen-md">
          {currentItems.map((item:Content.CarListSliceDefaultItem, i: number) => (
            <Card
              key={i}
              titolo={item.titolo}
              image={item.image}
              secondimage={item.secondimage}
              thirdimage={item.thirdimage}
              neopatentati={item.neopatentati}
              posti={item.posti as number}
              carburante={item.carburante}
              cambio={item.cambio}
            />
          ))}
        </div>
      </div>
      {/**  PAGINATION */}
      <Pagination
        handlePageClick={handlePageClick}
        cardsPerPage={carsPerPage}
        pagesNumber={pagesNumber}
      />
    </>
  );
}

export default CardList;
