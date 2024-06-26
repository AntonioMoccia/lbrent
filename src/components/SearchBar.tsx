import React, { useEffect, useState } from 'react'

function SearchBar({onSearchChange}:{onSearchChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) {

  return (
    <div className="relative">
    <input
      type="text"
      className="pl-10 w-full max-w-[85rem] pr-4 py-1 border-2 rounded-xl border-black placeholder-black"
      placeholder="Ricerca"
      name="titolo"
      onChange={(e)=>{
        onSearchChange(e)
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1528 13.6591C17.7388 10.3378 17.5053 5.53277 14.4521 2.47959C11.146 -0.826529 5.7857 -0.826528 2.47959 2.47959C-0.826529 5.7857 -0.826529 11.146 2.47959 14.4521C5.53277 17.5053 10.3378 17.7388 13.6591 15.1528C13.6734 15.169 13.6883 15.1849 13.7038 15.2004L18.1935 19.6901C18.6068 20.1033 19.2768 20.1033 19.6901 19.6901C20.1033 19.2768 20.1033 18.6068 19.6901 18.1935L15.2004 13.7038C15.1849 13.6883 15.169 13.6734 15.1528 13.6591ZM12.9555 3.97615C15.4351 6.45573 15.4351 10.4759 12.9555 12.9555C10.4759 15.4351 6.45573 15.4351 3.97615 12.9555C1.49656 10.4759 1.49656 6.45573 3.97615 3.97615C6.45573 1.49656 10.4759 1.49656 12.9555 3.97615Z"
          fill="black"
        />
      </svg>
    </div>
  </div>
  )
}

export default SearchBar