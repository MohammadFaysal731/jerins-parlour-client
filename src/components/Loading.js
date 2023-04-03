import React from "react";
import loading from "../assets/icons/loading-removebg-preview.png";
const Loading = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <img src={loading} alt="" className="w-20 animate-spin transition-all duration-100 delay-100 ease-in" />
    </div>
  );
};

export default Loading;
