import React from "react";
import { SiDell, SiSamsung, SiSony } from "react-icons/si";
import { BsApple, BsMicrosoft } from "react-icons/bs";

const Sponsored = () => {
  return (
    <>
      <h1 className="font-bold mt-6 md:ml-7 text-3xl">Sponsored</h1>
      <div className=" w-full md:w-[70%] sm:block bg-gray-300 py-10 md:px-5 mb-7 mt-8 cursor-pointer rounded-xl md:ml-[190px] shadow-md">
        <div className=" flex items-center md:gap-[100px] gap-3 justify-center">
          <SiSamsung size={60} />
          <BsApple size={60} />
          <SiDell size={60} />
          <BsMicrosoft size={60} />
          <SiSony size={60} />
        </div>
      </div>
    </>
  );
};

export default Sponsored;
