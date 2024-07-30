import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(true);

  const gsapRef = useRef();

  const gsapAnimation = useGSAP(() => {
    gsap.from(gsapRef.current, {
      x: -100,
      duration: 3
    })
  })

  useEffect(() => {}, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuAnimation = () => {
    setMenuPosition(!menuPosition);
  };

  return (
    <>
      <nav className="h-20 flex items-center justify-between px-12">
        <div className="part-1">
          <img className="w-40 h-14" src="/images/flash.png" alt="" />
        </div>
        <div className="nav-tag hidden part-2 text-white cross:flex gap-5">
          <a href="#" className="font-poppins font-medium text-[1.2rem]">
            Home
          </a>
          <a href="#" className="font-poppins font-medium text-[1.2rem]">
            Tournaments
          </a>
          <a href="#" className="font-poppins font-medium text-[1.2rem]">
            News
          </a>
          <a href="#" className="font-poppins font-medium text-[1.2rem]">
            Misson
          </a>
        </div>
        <div className="part-3">
          <div className="hidden cross:block">
            <a
              className="bg-white px-10 py-3 rounded-2xl font-poppins font-medium"
              href="#"
            >
              Get Started <span><i class="ri-arrow-right-up-line font-semibold"></i></span>
            </a>
          </div>
          <div onClick={menuAnimation} className="text-white cross:hidden">
            <i
              onClick={toggleMenu}
              className={`${
                isMenuOpen ? "ri-close-large-line" : "ri-menu-fill"
              }  ri-menu-fill text-xl font-semibold`}
            ></i>
          </div>
        </div>
      </nav>
      <div ref={gsapRef} className={`menu ${menuPosition ? 'mt-[-1000px]' : 'mt-[0px]' } cross:hidden h-[calc(100vh-80px)] bg-zinc-900`}>
          <div className="w-full bg-zinc-700 text-white">
            <a href="" className="font-poppins text-lg font-medium bg-transparent block px-4 py-2">Home</a>
            <a href="" className="font-poppins text-lg font-medium bg-transparent block px-4 py-2">Tournaments</a>
            <a href="" className="font-poppins text-lg font-medium bg-transparent block px-4 py-2">News</a>
            <a href="" className="font-poppins text-lg font-medium bg-transparent block px-4 py-2">Misson</a>
          </div>
      </div>
    </>
  );
};

export default Header;




