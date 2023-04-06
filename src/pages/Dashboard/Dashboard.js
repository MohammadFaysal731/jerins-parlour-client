import React, { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/icons/loading.png";
import { dashboardData } from "./dashboarData";
const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* left side */}
      <div
        className={`border ${
          open ? "md:w-72" : "w-20"
        } min-h-screen bg-secondary duration-300`}
      >
        <div className="relative">
          {/* logo  */}
          <div className="flex p-2">
            <img
              src={Logo}
              alt=""
              className={`w-10 md:w-20 duration-500 ${open && "rotate-180"}`}
            />
            <span className={`origin-left duration-300 ${!open && "scale-0"}`}>
              <p className="text-sm md:text-xl font-bold">Jerin's</p>
              <p className="text-sm md:text-lg font-semibold ">Parlour</p>
            </span>
          </div>
          {/* control */}
          <button
            onClick={() => setOpen(!open)}
            className={`absolute top-[55px] -right-[25px]  bg-primary rounded-full p-3 text-secondary  duration-700  ${
              !open && "rotate-180"
            }`}
          >
            <BiRightArrow />
          </button>
        </div>
        {/* dashboard menu items */}
        <ul className="mt-5">
          {dashboardData?.map(({ name, icons, link }, index) => (
            <li
              className={`hover:text-primary flex items-center mx-5 ${
                open && "me-12"
              } my-5 text-sm md:text-xl font-bold `}
              key={index}
            >
              {/* icons */}
              <div className="">
                <span className="text-3xl ">
                  <Link to={link}>
                    <small>{icons}</small>
                  </Link>
                </span>
              </div>
              &nbsp;
              <span
                className={`${!open && "hidden"} origin-left duration-300 ${
                  !open && "scale-0"
                } `}
              >
                <Link to={link}>
                  <small>{name}</small>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* right side */}
      <div className="border flex-1 min-h-screen">
        <nav className="h-[55px] bg-secondary">
          <Link to="/">
            <span className="text-sm md:text-2xl mx-5">Home</span>
          </Link>
        </nav>
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
