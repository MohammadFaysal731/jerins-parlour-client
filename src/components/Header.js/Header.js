import React, { useState } from 'react';
import logo from "../../assets/icons/logo.png";
import Banner from './Banner';
const Header = () => {
  const [open,setOpen]=useState(false);
  const menuItems = (
    <>
      <li className="py-4 lg:mx-4 text-md lg:text-xl font-semibold">Home</li>
      <li className="py-4 lg:mx-4 text-md lg:text-xl font-semibold">Review</li>
      <li className="py-4 lg:mx-4 text-md lg:text-xl font-semibold">Review</li>
      <li className="py-4 lg:mx-4 text-md lg:text-xl font-semibold">About</li>
      <li className="py-4 lg:mx-4 text-md lg:text-xl font-semibold">Contact Us</li>
      <li className="py-4 lg:mx-4 text-md lg:text-xl font-semibold">Sign in</li>
    </>
  );
  return (
    <nav className="bg-secondary">
      <div className="max-w-7xl mx-auto p-3 lg:p-0">
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
            </button>
          </div>
          {/* navbar logo and mobile navbar icon end */}

          {/* nav items start */}
          <ul className="hidden p-5 lg:flex">{menuItems}</ul>
          {/* nav items end */}
        </div>
        {/* mobile navbar items  */}
        <ul
          className={`lg:hidden p-5  ${
            open ? "max-h-auto" : "max-h-0 overflow-hidden"
          }`}
        >
          {menuItems}
        </ul>
       <Banner/>
      </div>
    </nav>
  );
};

export default Header;