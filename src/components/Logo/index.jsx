import React from "react";
import LogoCapres from "../../assets/images/capres.jpg";

export default function Logo(props) {
  return (
    <div className="flex items-center">
      <div className="h-auto w-20">
        <img className="h-full w-full" src={LogoCapres} alt="logo" />
      </div>
      <h2 className="m-0 ml-4 text-xl font-semibold text-gray-700/70">
        'Logo'
      </h2>
    </div>
  );
}
