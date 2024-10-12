'use client';
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
  const pathname = usePathname()

  return (
    <>
      <div
      // max-md:top-0 max-md:p-1
        className="nav-menu"
        id="myNavMenu"
      >
        <div
          className="menu">
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
