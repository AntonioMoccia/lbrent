"use client";
import Image from "next/image";
import { Logo, FOOTER_MENU } from "../constants";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import PrivacyPolicyButton from "./PrivacyPolicyButton";
import CookiePolicyButton from "./CookiePolicyButton";
import { LuPhone } from "react-icons/lu";
import { useEffect, useState } from "react";

function Footer() {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  return innerWidth > 1023 ? (
    <footer className=" h-[200px] max-h-[300px] py-8 lg:flex lg:justify-around">
      <div className=" max-w-screen-lg w-full justify-between flex">
        <div className=" h-full lg:w-[60%] flex justify-around items-start px-4 ">
          <div className=" w-48">
            <Link href={"/"}>
              <Image src={Logo} alt="Alt logo" width={130} height={88} />
            </Link>
          </div>
          <div className=" h-full py-3">
            <ul className=" flex gap-5 flex-col">
              <li className=" text-[0.65rem] font-semibold lg:text">
                <Link href={"/"}>Home</Link>
              </li>
              <li className=" text-[0.65rem] font-semibold  lg:text">
                <Link href={"/breve-termine"}>Breve termine</Link>
              </li>
              <li className=" text-[0.65rem] font-semibold  lg:text">
                <Link href={"/lungo-termine"}>Lungo termine</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full flex flex-col  justify-center items-center">
          <div className=" h-full w-[1px] bg-black" />
          {/**Divider */}
        </div>
        <div className=" h-full flex flex-col justify-between">
          <div className=" gap-5 flex flex-col">
            <div className=" flex gap-2">
              <span className="  bg-black p-1 rounded-full">
                <LuPhone color="white" />
              </span>
              <span className=" text-xs h-full flex justify-center items-center">
                <a href="tel:+393452966189">+39 3452966189</a>
              </span>
            </div>
            <div className=" flex gap-2">
              <span className="  bg-black p-1 rounded-full">
                <LuPhone color="white" />
              </span>
              <span className=" text-xs h-full flex justify-center items-center">
                <a href="tel:+393452966189">+39 3452966189</a>
              </span>
            </div>
          </div>
          <div className="h-full flex font-light justify-end flex-col gap-2 ">
            <div className=" pt-4 text-[0.6rem] text-left">
              created by {""}{" "}
              <a href="https://antoniomoccia.com" target="__blank">
                {" "}
                Antonio Moccia
              </a>
            </div>
            <div className=" font-light">
              <ul className=" flex gap-2">
                <li className=" text-[0.6rem]">
                  <PrivacyPolicyButton />
                </li>
                <li className=" text-[0.6rem]">
                  {" "}
                  <CookiePolicyButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    <footer className=" h-[150px] max-h-[200px] pt-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
      <div className=" flex flex-col gap-2">
        <div className=" h-1/2 lg:w-[80%] flex justify-around  items-center px-4 ">
          <div className=" w-20">
            <Link href={"/"}>
              <Image src={Logo} alt="Alt logo" width={100} height={68} />
            </Link>
          </div>
          <div>
            <ul className=" flex gap-2">
              <li className=" text-[0.65rem] lg:text">
                <PrivacyPolicyButton />
              </li>
              <li className=" text-[0.65rem]  lg:text">
                <CookiePolicyButton />
              </li>
            </ul>
          </div>
          <div className=" flex gap-2 justify-center items-center w-16 ">
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
        </div>
        <div className=" gap-5 flex items-center justify-center w-full p-5 ">
          <div className=" flex gap-2">
            <span className="  bg-black p-1 rounded-full">
              <LuPhone color="white" />
            </span>
            <span className=" text-xs h-full flex justify-center items-center">
              <a href="tel:+393452966189">+39 3452966189</a>
            </span>
          </div>
          <div className=" flex gap-2">
            <span className="  bg-black p-1 rounded-full">
              <LuPhone color="white" />
            </span>
            <span className=" text-xs h-full flex justify-center items-center">
              <a href="tel:+393452966189">+39 3452966189</a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className=" w-[80%] pl-[10%] h-[0.5px] bg-black" />
        {/**Divider */}
      </div>
      <div className=" h-1/2 pt-4 text-[0.6rem] text-center">
        created by {""}{" "}
        <a href="https://antoniomoccia.com" target="__blank">
          {" "}
          Antonio Moccia
        </a>
      </div>
    </footer>
  );
}

export default Footer;
