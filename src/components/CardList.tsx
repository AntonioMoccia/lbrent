"use client";
import React, { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import usePagination from "@/hooks/usePagination";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { Content } from "@prismicio/client";
import { useFilters } from "@/hooks/useFilters";
import { uniqBy } from "lodash";
import { Accordion, Item } from "./accordion";
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
    onResize();
    const resizeEvent = window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);
  };

  const { handleFilterChange, data, filters } = useFilters({
    filtersDef: [
      {
        field: "neopatentati",
        value: false,
        validator: (item: any, filterValue: any) => {
          if (!filterValue) {
            return true;
          } else {
            return item.neopatentati;
          }
        },
      },
      {
        field: "segmento",
        value: [],
        validator: (item: any, filterValue: any[]) => {
          if (filterValue.length == 0) {
            return true;
          }
          return filterValue.includes(item.segmento);
        },
      },
      {
        field: "titolo",
        value: "",
        validator: (item: any, filterValue: any) => {
          return (item.titolo as string)
            ?.toLowerCase()
            .trim()
            .includes(filterValue.toLowerCase().trim());
        },
      },
    ],
    items: Cards.items,
  });

  const { currentItems, pagesNumber } = usePagination({
    data: data,
    dataPerPage: carsPerPage,
    currentPage,
  });

  const segmentoChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      return handleFilterChange(
        e.target.getAttribute("data-field") as string,
        (initalFieldValue: any[]) => {
          if (initalFieldValue.includes(e.target.value)) {
            return initalFieldValue;
          }
          let temp = [...initalFieldValue];
          temp.push(e.target.value);
          return temp;
        }
      );
    } else {
      return handleFilterChange(
        e.target.getAttribute("data-field") as string,
        (initalFieldValue: any[]) => {
          let temp = initalFieldValue.filter((val) => {
            return val !== e.target.value;
          });

          return temp;
        }
      );
    }
  };
  const segmenti = [
    {
      value: "utilitaria",
      label: "Utilitaria",
    },
    {
      value: "crossover",
      label: "Crossover",
    },
    {
      value: "suv",
      label: "Suv",
    },
    {
      value: "luxury-sportive",
      label: "Luxury car / sportive",
    },
  ];

  return (
    <>
      <section className=" h-full py-2 block lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className=" w-full flex justify-center items-center">
          <SearchBar
            onSearchChange={(e) => {
              handleFilterChange(e.target.name, (initalFieldValue: any) => {
                return (initalFieldValue = e.target.value);
              });
            }}
          />
        </div>

        <div className=" w-full flex flex-col items-center justify-center ">
          <fieldset className=" py-5 gap-3 hidden lg:flex ">
            {segmenti.map((item) => {
              return (
                <div key={item.value} className="flex items-center gap-2">
                  <input
                    className="  relative peer shrink-0
                    appearance-none w-6 h-6 border-2 border-black rounded-sm bg-white
                    mt-1
                   checked:bg-black checked:border-0"
                    onChange={segmentoChangeFilter}
                    data-field="segmento"
                    type="checkbox"
                    id={item.value as string}
                    value={item.value as string}
                  />
                  <label
                    className=" cursor-pointer"
                    htmlFor={item.value as string}
                  >
                    {" "}
                    {item.label}
                  </label>
                  <svg
                    className="
                      absolute 
                      w-6 h-6 p-1
                      pointer-events-none
                      hidden peer-checked:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              );
            })}
          </fieldset>

          <Accordion
            type="single"
            collapsible
            className=" block w-[60%] lg:hidden"
          >
            <div className=" decoration-0">
              <Item underline={false} label="Vedi Filtri" itemNumber={1}>
                <fieldset className=" z-30 flex flex-col ml-10 gap-3 ">
                  {segmenti.map((item) => {
                    return (
                      <div key={item.value} className="flex items-center gap-2">
                        <input
                          className="  relative peer shrink-0
                          appearance-none w-6 h-6 border-2 border-black rounded-sm bg-white
                          mt-1
                          checked:bg-black checked:border-0"
                          onChange={segmentoChangeFilter}
                          data-field="segmento"
                          type="checkbox"
                          id={item.value as string}
                          value={item.value as string}
                          checked={
                            filters.filter((filter: any) => {
                              return filter.field == "segmento" && filter.field == "segmento" && filter.value.includes(item.value)
                            }).length > 0
                          }
                        />
                        <label
                          className="peer-checked:block cursor-pointer"
                          htmlFor={item.value as string}
                        >
                          {" "}
                          {item.label}
                        </label>
                        <svg
                          className="
                      absolute 
                      w-6 h-6 p-1
                      pointer-events-none
                      hidden peer-checked:block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    );
                  })}

                </fieldset>
              </Item>
            </div>
          </Accordion>
        </div>
      </section>

      <div className=" flex px-1 py-5 flex-col justify-start items-center gap-4 bg-black max-h-[calc(100vh-8rem)] min-h-[750px] ">
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 p-2 h-auto max-w-screen-md">
          {currentItems.map(
            (item: Content.CarListSliceDefaultItem, i: number) => (
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
                segmento={item.segmento}
              />
            )
          )}
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
