import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { headerData } from "./HeaderData";
const Header = () => {
  const [open, setOpen] = useState(false);
  const menuItems = (
    <>
      {headerData?.map(({ text, path }, index) => (
        <li
          className="py-4  lg:mx-4 text-sm lg:text-xl font-semibold"
          key={index}
        >
          <NavLink
            to={path}
            style={({ isActive }) => {
              return {
                color: isActive ? "#F63E7B" : "black",
              };
            }}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </>
  );
  return (
    <nav className="bg-secondary">
      <div className="max-w-7xl mx-auto p-3 pb-0 lg:p-0">
        <div className="flex justify-between items-center">
          {/* navbar logo and mobile navbar icon start */}
          {/* logo  */}
          <div className="">
            <img src={logo} alt="" className="h-12" />
          </div>
          {/* mobile navbar icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="btn btn-square btn-ghost"
            >
              {open ? (
                <AiOutlineClose className=" w-8 h-8" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          {/* navbar logo and mobile navbar icon end */}

          {/* nav items start */}
          <ul className="hidden p-5 lg:flex">{menuItems}</ul>
          {/* nav items end */}
        </div>
        {/* mobile navbar items  */}
        <ul
          className={`lg:hidden p-5 pb-0 ${
            open ? "max-h-auto" : "max-h-0 overflow-hidden"
          }`}
        >
          {menuItems}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
