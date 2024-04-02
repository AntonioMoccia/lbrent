"use client";
import Image from "next/image";
import { Logo, MENU_LINKS } from "../constants";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";




function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()
  const handleButtonClick = () => {
    console.log("click");

    setOpen(!open);
  };
  useEffect(()=>{
    console.log(pathname);
  },[pathname])

  return (
    <header className=" bg-white h-20 ">
      <nav className=" flex items-center px-2 h-full justify-around">
        <div className=" absolute flex justify-between bg-white z-50 h-20 w-full items-center ">
          <div className=" w-auto">
           <Link href={'/'}>
            <Image src={Logo} alt="Alt logo" width={100} height={68} />
           </Link>
          </div>
          <div
            onClick={handleButtonClick}
            className=" lg:hidden flex  justify-center items-center w-10 h-10 rounded-lg bg-black text-white"
          >
            <IoMenu />
          </div>
        </div>
        <div
          className={clsx(
            "nav-links duration-300 md:static absolute py-5 bg-white md:min-h-fit left-0 md:w-auto w-full flex justify-center items-center px-5",
            open ? "top-20" : "top-[-100%] "
          )}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] w-full gap-8">
            {MENU_LINKS.map((item, index) => (
              <li key={index} className=" text-center">
                <Link onClick={()=>setOpen(false)} className={clsx(
                  "hover:bg-black hover:px-[0.5rem] hover:rounded-lg hover:text-white hover:py-2",
                  pathname == item.href ? "bg-black px-[0.5rem] rounded-lg text-white py-2" : ""
                )} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

/**
 *  <div className=" w-auto">
          <Image src={Logo} alt="Alt logo" width={100} height={68} />
        </div>

 */
