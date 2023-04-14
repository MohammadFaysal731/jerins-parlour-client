import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { BiRightArrow } from "react-icons/bi";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate
} from "react-router-dom";
import Logo from "../../assets/icons/loading.png";
import User from "../../assets/icons/user.jpg";
import { auth } from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { dashboardData } from "./dashboarData";
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut();
    localStorage.removeItem("accessToken");
    navigate("/sign-in");
  };

  return (
    <div className="flex">
      {/* left side */}
      <div
        className={`border ${
          open ? "md:w-72" : "w-20"
        }  min-h-screen bg-secondary duration-300`}
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
          {/* normal user */}
          {!admin && (
            <>
              {dashboardData
                ?.slice(0, 3)
                ?.map(({ name, icons, link }, index) => (
                  <li
                    className={`flex items-center mx-5 ${
                      open && "me-12"
                    } my-5 text-sm md:text-xl font-bold `}
                    key={index}
                  >
                    {/* icons */}
                    <div className="">
                      <span className="text-3xl ">
                        <NavLink
                          to={link}
                          style={({ isActive }) => {
                            return {
                              color: isActive ? "#F63E7B" : "black",
                            };
                          }}
                        >
                          <small title={name}>{icons}</small>
                        </NavLink>
                      </span>
                    </div>
                    &nbsp;
                    {/* link text */}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-500 ${!open && "scale-0"} `}
                    >
                      <NavLink
                        to={link}
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "#F63E7B" : "black",
                          };
                        }}
                      >
                        <small>{name}</small>
                      </NavLink>
                    </span>
                  </li>
                ))}
            </>
          )}
          {/* admin */}
          {admin && (
            <>
              {dashboardData
                ?.slice(3, 7)
                ?.map(({ name, icons, link }, index) => (
                  <li
                    className={`flex items-center mx-5 ${
                      open && "me-12"
                    } my-5 text-sm md:text-xl font-bold `}
                    key={index}
                  >
                    {/* icons */}
                    <div className="">
                      <span className="text-3xl ">
                        <NavLink
                          to={link}
                          style={({ isActive }) => {
                            return {
                              color: isActive ? "#F63E7B" : "black",
                            };
                          }}
                        >
                          <small title={name}>{icons}</small>
                        </NavLink>
                      </span>
                    </div>
                    &nbsp;
                    {/* link text */}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-500 ${!open && "scale-0"} `}
                    >
                      <NavLink
                        to={link}
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "#F63E7B" : "black",
                          };
                        }}
                      >
                        <small>{name}</small>
                      </NavLink>
                    </span>
                  </li>
                ))}
            </>
          )}
        </ul>
      </div>
      {/* right side */}
      <div className="border flex-1 min-h-screen">
        <nav className="h-[55px] bg-secondary flex justify-between items-center">
          <Link to="/">
            <span className="text-sm md:text-2xl mx-5">Home</span>
          </Link>
          <ul>
            <li className="py-4  lg:mx-4 text-sm lg:text-xl font-semibold">
              {user ? (
                <li className="flex justify-center items-center">
                  {user?.photoURL ? (
                    <li>
                      <img
                        src={user?.photoURL}
                        alt=""
                        className="rounded-full w-10"
                      />
                    </li>
                  ) : (
                    <li>
                      <img src={User} alt="" className="rounded-full w-10" />
                    </li>
                  )}
                  <li className="py-4  lg:mx-4 text-sm lg:text-xl font-semibold">
                    <button
                      onClick={handleSignOut}
                      className="hover:text-primary mx-2"
                    >
                      Sing out
                    </button>
                  </li>
                </li>
              ) : (
                ""
              )}
            </li>
          </ul>
        </nav>
        <div className="p-7">
          <h2>Welcome to dashboard page</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
