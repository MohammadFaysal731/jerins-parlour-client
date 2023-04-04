import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
const NotFound = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col items-center text-sm md:text-5xl  font-bold whitespace-nowrap ">
        <img src={Logo} alt="" className="w-40 md:w-96  items-center " />
        <h2 className="m-6">
          4 0 4 <span className="text-primary">page</span> not{" "}
          <span className="text-primary">found</span>{" "}
        </h2>

        <h4 className="m-6">
          Go to{" "}
          <span className="underline text-primary">
            <Link to="/">Home</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
