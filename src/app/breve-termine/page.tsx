"use client";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { Cards, HeroImage } from "@/constants";
import { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import ReactPaginate from "react-paginate";

function BreveTermine() {
  const [Cars, setCars] = useState([...Cards]);
  const [filteredCars, setFilteredCars] = useState(Cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage,setCarsPerPage] = useState(6);
  const [search, setSearch] = useState('')
  // ...

  const indexOfLastPost = currentPage * carsPerPage;
  const indexOfFirstPost = indexOfLastPost - carsPerPage;
  const currentCars = Cars.slice(indexOfFirstPost, indexOfLastPost);
  const pagesNumber = Math.ceil(Cars.length / carsPerPage);


  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event: any) => {
    /*  const newOffset = (event.selected * carsPerPage) % Cars.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset); */
    setCurrentPage(event.selected + 1);
  };

  useEffect(()=>{
    if(search == ''){
      setFilteredCars(Cars)
    }else{
      let tempCars = filteredCars.filter(car=>{
        return car.title.toLowerCase().trim().includes(search.toLowerCase().trim())
      })
      setFilteredCars(tempCars)
    }
  },[search])


  return (
    <>
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
      <section className=" h-32 flex justify-center items-center">
        <div className="relative">
          <input
            type="text"
            className="pl-10 pr-4 py-2 border-[0.2rem] rounded-xl border-black placeholder-black"
            placeholder="Ricerca"
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
          />
          <div
            className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1528 13.6591C17.7388 10.3378 17.5053 5.53277 14.4521 2.47959C11.146 -0.826529 5.7857 -0.826528 2.47959 2.47959C-0.826529 5.7857 -0.826529 11.146 2.47959 14.4521C5.53277 17.5053 10.3378 17.7388 13.6591 15.1528C13.6734 15.169 13.6883 15.1849 13.7038 15.2004L18.1935 19.6901C18.6068 20.1033 19.2768 20.1033 19.6901 19.6901C20.1033 19.2768 20.1033 18.6068 19.6901 18.1935L15.2004 13.7038C15.1849 13.6883 15.169 13.6734 15.1528 13.6591ZM12.9555 3.97615C15.4351 6.45573 15.4351 10.4759 12.9555 12.9555C10.4759 15.4351 6.45573 15.4351 3.97615 12.9555C1.49656 10.4759 1.49656 6.45573 3.97615 3.97615C6.45573 1.49656 10.4759 1.49656 12.9555 3.97615Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </section>
      <section>
        {/*    <div className=" flex justify-center items-center w-full bg-red-50">
            <div className=" w-full justify-center items-center flex bg-green-50">
              <ul className="flex gap-2 items-center ">
                <li>
                  <label htmlFor="manuale">Manuale</label>
                  <input type="checkbox" name="manuale" id="manuale" />
                </li>
                <li>
                  <label htmlFor="manuale">Manuale</label>
                  <input type="checkbox" name="manuale" id="manuale" />
                </li>
                <li>
                  <label htmlFor="manuale">Manuale</label>
                  <input type="checkbox" name="manuale" id="manuale" />
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div></div>
          </div> */}
        <div className=" flex px-1 flex-col justify-start items-center gap-4 bg-black max-h-[calc(100vh-8rem)] min-h-[750px] ">
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 p-2 h-auto max-w-screen-md">
            {currentCars.map((item, i) => (
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

          {/**  PAGINATION */}
        </div>
        <div className=" flex justify-center bg-black py-10">
          <ReactPaginate
            className=" flex w-auto gap-4 text-black justify-between items-center  "
            breakLabel="..."
            nextLabel={<RiArrowDropRightLine className=" text-4xl" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={carsPerPage}
            pageCount={pagesNumber}
            previousLabel={<RiArrowDropLeftLine className=" text-4xl" />}
            renderOnZeroPageCount={null}
            activeClassName=" bg-black border-white border-2 rounded-full w-[30px] h-[30px] text-center"
            nextClassName=" text-white"
            previousClassName=" text-white text-xl"
            pageClassName=" bg-white rounded-full w-[30px] h-[30px] text-center flex justify-center items-center"
            pageLinkClassName=" text-black"
            activeLinkClassName=" text-white bg-black w-full h-full rounded-full"
          />
        </div>
      </section>
    </>
  );
}

export default BreveTermine;
