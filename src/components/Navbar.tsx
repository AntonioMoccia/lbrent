"use client";
import Image from "next/image";
import { Logo, MENU_LINKS } from "../constants";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <header className=" bg-white h-20 ">
      <nav className=" flex items-center h-full justify-around px-5">
        <div className=" absolute lg:relative flex justify-between bg-white z-50 h-20 w-[90%] lg:max-w-[50vw]  items-center ">
          <div className=" w-auto">
            <Link href={"/"}>
              <Image src={Logo} alt="Alt logo" width={120} height={68} />
            </Link>
          </div>
          <div
            onClick={handleButtonClick}
            className=" cursor-pointer lg:hidden flex font-bold justify-center text-xs items-center  h-full rounded-lg text-black"
          >
            menù
          </div>
        </div>
        <div
          className={clsx(
            "nav-links duration-300 z-40  lg:top-0 absolute lg:relative py-5 lg:py-0 bg-white lg:min-h-fit left-0 lg:w-1/2 w-full flex justify-center items-center px-5",
            open ? "top-20" : "top-[-100%] "
          )}
        >
          <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] w-full gap-8">
            {MENU_LINKS.map((item, index) => (
              <li key={index} className=" text-center">
                <Link
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "hover:bg-black px-3 rounded-xl text-xs font-medium hover:text-white py-3",
                    pathname == item.href
                      ? "bg-black px-3 rounded-xl text-white py-3"
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
        <div className=" lg:flex lg:gap-2 hidden ">
          <a target="__blank" href="https://www.instagram.com/lb_rent_/">
            <FaInstagram className="text-xl bg-transparent text-black" />
          </a>
          <a
            target="__blank"
            href="https://www.facebook.com/autonoleggiolbrent/"
          >
            <FaFacebook className="text-xl bg-transparent text-black" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

/**
 * 
 *  <div className=" w-auto">
          <Image src={Logo} alt="Alt logo" width={100} height={68} />
        </div>
 */
