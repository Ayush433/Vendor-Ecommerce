import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "iphone 14 pro max",
      description: "j pani huna sakxa yeo static ho ",
      price: 999,
    },
    {
      name: "iphone 14 pro max",
      description: "j pani huna sakxa yeo static ho ",
      price: 999,
    },
    {
      name: "iphone 14 pro max",
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
            onClick={() => setOpenCart(false)}
          />
        </div>
        {/* items length */}
        <div className="flex md:mb-[650px]">
          <IoBagHandleOutline size={25} />
          <h5 className="pl-2 text-[20px] font-[500]"> 3 items</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
