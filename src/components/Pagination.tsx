
import React from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import ReactPaginate from "react-paginate";

export interface PaginationProps{
    handlePageClick : (event:any)=>void,
    cardsPerPage: number,
    pagesNumber:number
}

function Pagination({
    handlePageClick,
    cardsPerPage,
    pagesNumber
}:PaginationProps) {
  return (
    <div className=" flex justify-center bg-black py-10">
      <ReactPaginate
        className=" flex w-auto gap-4 text-black justify-between items-center  "
        breakLabel="..."
        nextLabel={<RiArrowDropRightLine className=" text-4xl" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={cardsPerPage}
        pageCount={pagesNumber}
        previousLabel={<RiArrowDropLeftLine className=" text-4xl" />}
        renderOnZeroPageCount={null}
        activeClassName=" text-center bg-black border-white border-2 rounded-full w-[30px] h-[30px] text-center"
        nextClassName=" text-white"
        previousClassName=" text-white text-xl"
        pageClassName=" bg-white rounded-full w-[30px] h-[30px] text-center flex justify-center items-center"
        pageLinkClassName=" text-black"
        activeLinkClassName=" text-white bg-black w-full h-full rounded-full"
      />
    </div>
  );
}

export default Pagination;
