import React from "react";
import { Link, useLocation } from "react-router-dom";
import CapresLogo from "../../assets/images/capres.jpg";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";

function Header() {
  const location = useLocation();
  return (
    <div
      id="NavbarContainer"
      className={
        " flex h-auto w-full items-center justify-between px-6 shadow-md" +
        (location.pathname === "/"
          ? " bg-transparent"
          : " bg-azul-capres-800 shadow-azul-capres-800")
      }
    >
      <div id="LeftSection" className="flex">
        <div className="h-20 w-full">
          <Link to="/">
            <img
              className="h-full w-full py-2"
              src={CapresLogo}
              alt="capres logo"
            />
          </Link>
        </div>
        <div className=""></div>
      </div>
      <div id="MiddleSection" className="flex">
        <NavLinks />
      </div>
      <div id="RightSection" className="">
        <button
          className={
            "text-3xl" +
            (location.pathname === "/"
              ? " text-gris-capres-700"
              : " text-gris-capres-200")
          }
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
}

export default Header;
