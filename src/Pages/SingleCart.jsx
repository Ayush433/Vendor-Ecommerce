import React from "react";
import { useState } from "react";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const SingleCart = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className="bg-[#e34] border border-[#e4434373] rounded-full w-[25px] h-[25px] flex justify-center cursor-pointer"
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={25} />
          </div>
          <span className="ml-2 mt-[20px]">{value}</span>
          <div
            className="bg-[#a7abb14f] border border-gray-500 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer mt-1"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={25} color="#7d879c" />
          </div>
        </div>
        <img
          src="https://s.alicdn.com/@sc04/kf/Hf8b99a2d79c94724b87966d3a710fe7b2.jpg_960x960.jpg"
          className="w-[80px] h-[80px] ml-2"
          alt=""
        />
        <div className="pl-[5px] ">
          <h1>
            {" "}
            {data?.name?.length > 40
              ? data?.name?.slice(0, 40) + "..."
              : data?.name}
          </h1>
          <h4 className="font-[400] text-[#000082]">
            {" "}
            Rs{data?.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            Rs {totalPrice}
          </h4>
        </div>
        <RxCross1 size={20} />
      </div>
    </div>
  );
};

export default SingleCart;
