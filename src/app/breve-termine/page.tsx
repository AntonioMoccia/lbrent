"use client";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { Cards, HeroImage } from "@/constants";
import { useState } from "react";
import { RiArrowDropLeftLine,RiArrowDropRightLine } from "react-icons/ri";



function BreveTermine() {
  const [Cars, setCars] = useState([...Cards]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(5);

  // ...

  const indexOfLastPost = currentPage * carsPerPage;
  const indexOfFirstPost = indexOfLastPost - carsPerPage;
  const currentCars = Cars.slice(indexOfFirstPost, indexOfLastPost);
  const pagesNumber = Math.ceil(Cars.length / carsPerPage)


  return (
    <>
      <section>
        <Hero
          imageSrc={HeroImage}
          fullScreen={false}
          h1={
            <>
              NOLEGGIO
              <br /> BEVE TERMINE
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
{/*         <div className=" flex justify-center items-center w-full bg-red-50">
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
        <div className=" flex px-1 flex-col justify-start items-center gap-4 bg-black min-h-[calc(100vh-8rem)] ">
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 p-2 h-auto max-w-screen-md">
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
          <div className=" w-full flex items-center justify-center h-5 bg-red-200">
            {
              currentPage > 1 && (
                <button onClick={()=>{
                  setCurrentPage(prev=>prev-1)
                }}>
                  <RiArrowDropLeftLine />
                </button>
              )
            }
            {new Array(pagesNumber)
              .fill("")
              .map((p, i) => (
                <button key={i} className=" bg-red-50 ml-3 px-2 py-1 rounded-full w-[35px] h-[35px] ">
                  {i+1}
                </button>
              ))}
               {
              currentPage !== pagesNumber && (
                <button onClick={()=>{
                  setCurrentPage(prev=>prev+1)
                }}>
                  <RiArrowDropRightLine />
                </button>
              )
            }
          </div>
      </section>
    </>
  );
}

export default BreveTermine;
