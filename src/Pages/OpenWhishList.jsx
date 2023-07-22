import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import SingleCart from "./SingleCart";
import { Link } from "react-router-dom";
import WishListCart from "./WishListCart";
import { AiOutlineHeart } from "react-icons/ai";

const OpenWhishList = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "Hoodies Hoodie Fleece Men Casual Bright Colored Cheap Hoodies And Sweat Pants Set Free Sample H",
      description: "j pani huna sakxa yeo static ho ",
      price: 999,
    },
    {
      name: "iphone 14 Hoodies Hoodie Fleece Men Casual Bright Colored Cheap Hoodies And Sweat Pants Set Free Sample H max",
      description: "j pani huna sakxa yeo static ho ",
      price: 999,
    },
    {
      name: "Hoodies Hoodie Fleece Men Casual Bright Colored Cheap Hoodies And Sweat Pants Set Free Sample H 14 pro max",
      description: "j pani huna sakxa yeo static ho ",
      price: 999,
    },
  ];
  return (
    <div className="bg-[#0000004b] h-screen z-10 fixed top-0 left-0 w-full ">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between">
        <div className="flex justify-end w-full pr-5 pt-6 ">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishList(false)}
          />
        </div>
        {/* items length */}
        <div className="mb-[500px]">
          <div className="flex">
            <AiOutlineHeart size={30} className="ml-3" />
            <h5 className="pl-2 text-[20px] font-[500]"> 3 items</h5>
          </div>

          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <WishListCart data={i} key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenWhishList;
