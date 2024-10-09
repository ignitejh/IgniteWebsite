"use client";
import { navbar } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

function MenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  console.log("pressed btn");

  if (menuBtn !== null) {
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
}

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div
        className="nav-menu w-[100%] sticky top-2 justify-center items-center flex flex-1 p-3 z-20 max-md:top-0 max-md:p-1"
        id="myNavMenu"
      >
        <div
          className={`menu min-w-[60%] h-[auto] flex flex-wrap justify-center items-center gap-6 p-2 rounded-full  
            ${
            pathname != "/domains"
              ? "bg-[#C92842] text-white"
              : "bg-transparent text-black"
          }
           `}
        >
          {navbar.map((item, index) => (
            <Link
              onClick={() => MenuFunction()}
              className={`p-[8px] rounded-[20px] px-5 hover:bg-[white] hover:text-[#C92842] ease-in-out transition-all  font-semibold capitalize `}
              href={item.link}
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="nav-menu-btn">
        <CiMenuBurger
          size={25}
          className="uil uil-bars"
          // onClick={MenuFunction}
          onClick={() => MenuFunction()}
        />
      </div>
    </>
  );
};

export default Navbar;
