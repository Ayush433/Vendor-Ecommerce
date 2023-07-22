import React from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const WishListCart = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
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
        <AiOutlineShoppingCart size={35} />
      </div>
    </div>
  );
};

export default WishListCart;
