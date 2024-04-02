"use client";
import Image from "next/image";
import { Logo, MENU_LINKS } from "../constants";
import { IoMenu,IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleButtonClick = () => {
    console.log("click");

    setOpen(!open);
  };
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <header className=" bg-white h-20 ">
      <nav className=" flex items-center h-full justify-around px-5">
        <div className=" absolute lg:relative flex justify-between bg-white z-50 h-20 w-[90%] lg:max-w-[50vw]  items-center ">
          <div className=" w-auto">
            <Link href={"/"}>
              <Image src={Logo} alt="Alt logo" width={100} height={68} />
            </Link>
          </div>
          <div
            onClick={handleButtonClick}
            className=" lg:hidden flex  justify-center items-center w-10 h-10 rounded-lg bg-black text-white"
          >
           {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <div
          className={clsx(
            "nav-links duration-300 md:static lg:top-0 absolute lg:relative py-5 lg:py-0 bg-white md:min-h-fit left-0 md:w-1/2 w-full flex justify-center items-center px-5",
            open ? "top-20" : "top-[-100%] "
          )}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] w-full gap-8">
            {MENU_LINKS.map((item, index) => (
              <li key={index} className=" text-center">
                <Link
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "hover:bg-black px-3 rounded-xl text-xs font-medium hover:text-white py-3",
                    pathname == item.href
                      ? "bg-black px-[0.5rem] rounded-xl text-white py-3"
                      : ""
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          <div className=" md:flex md:gap-2 hidden ">
            <FaWhatsapp size={25} />
            <FaInstagram size={25} />
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
