import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import User from "../../assets/icons/user.jpg";
import { auth } from "../../firebase.init";
import { headerData } from "./HeaderData";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handleSignOut = () => {
    signOut();
    localStorage.removeItem("accessToken");
  };
  // change header color on scroll 
  const handleChangeColor = () => {
    if (window.scrollY) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  window.addEventListener("scroll", handleChangeColor);
  const menuItems = (
    <>
      {headerData?.slice(0, 5).map(({ text, path }, index) => (
        <li
          className="py-4  lg:mx-4 text-sm lg:text-xl font-semibold"
          key={index}
        >
          {/*  change header color*/}
          {changeColor ? (
            <NavLink
              to={path}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#FFF8F5" : "black",
                };
              }}
            >
              {text}
            </NavLink>
          ) : (
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
          )}
        </li>
      ))}
      {user && (
        <>
          {headerData?.slice(5, 6)?.map(({ text, path }, index) => (
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
      )}

      {user ? (
        <>
          <li className="py-4  lg:mx-4 text-sm lg:text-xl font-semibold">
            {user?.photoURL ? (
              <img className="rounded-full w-10" src={user?.photoURL} alt="" />
            ) : (
              <img className="rounded-full w-10" src={User} alt="" />
            )}
          </li>
          <li className="py-4  lg:mx-4 text-sm lg:text-xl font-semibold">
            <button
              onClick={handleSignOut}
              className={`${
                changeColor ? "hover:text-secondary" : "hover:text-primary"
              } `}
            >
              Sing out
            </button>
          </li>
        </>
      ) : (
        <li className="py-4  lg:mx-4 text-sm lg:text-xl font-semibold">
          <NavLink
            to="/sign-in"
            style={({ isActive }) => {
              return {
                color: isActive ? "#F63E7B" : "black",
              };
            }}
          >
            Sign in
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav
      className={`${
        changeColor
          ? "bg-primary transition-all duration-700"
          : "bg-secondary transition-all duration-700"
      }  sticky top-0 z-10`}
    >
      <div className="max-w-7xl mx-auto p-3 pb-0 lg:p-0">
        <div className="flex justify-between items-center">
          {/* navbar logo and mobile navbar icon start */}
          {/* logo  */}
          <div className="">
            <Link to="/">
              <img src={Logo} alt="" className="h-12" />
            </Link>
          </div>
          {/* mobile navbar icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="btn btn-square btn-ghost"
            >
              {open ? (
                <AiOutlineClose
                  className=" w-8 h-8 "
                  style={{ color:'black' }}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                  style={{ color: "black" }}
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
