"use client";
import React, { useEffect, useState } from "react";
import Card, { CardProps } from "./Card";
import usePagination from "@/hooks/usePagination";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

function CardList({ Cards }: { Cards: CardProps[] }) {
  const [filteredCars, setFilteredCars] = useState(Cards);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(6);

  useEffect(() => {
    const onResize = (e : Event) => {
      if (window.innerWidth < 768) {
        setCarsPerPage(6);
      } else {
        setCarsPerPage(9);
      }
    };
    const resizeEvent = window.addEventListener("resize",onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  const onSearchChange = (search: string) => {
    if (search == "") {
      setFilteredCars(Cards);
    } else {
      let tempCars = Cards.filter((car) => {
        return car.title
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim());
      });

      setFilteredCars(tempCars);
    }
  };

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

      <div className=" flex px-1 flex-col justify-start items-center gap-4 bg-black max-h-[calc(100vh-8rem)] min-h-[750px] ">
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 p-2 h-auto max-w-screen-md">
          {currentItems.map((item: any, i: number) => (
            <Card
              key={i}
              title={item.title}
              image={item.image}
              neopatentato={item.neopatentato}
              posti={item.posti}
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
