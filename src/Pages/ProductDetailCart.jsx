import React from "react";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const ProductDetailCart = ({ data, setOpen }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const handleMessageSubmit = () => {
    console.log();
  };

  return (
    <div className="bg-#fff">
      {data ? (
        <div className="fixed h-screen w-full top-7 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[60%] h-[90vh] md:[90%] overflow-y-scroll md:h-[75vh] bg-white rounded-md shadow-sm relative p-4 ">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full md:flex">
              <div className="w-full md:w-[50%]">
                <img src={data?.image_Url[0]?.url} alt="" />
              </div>
              <div className="w-full md:w-[50%]">
                <div className="flex">
                  <img
                    src={data?.shop?.shop_avatar?.url}
                    alt=""
                    className="w-[50px] h-[60px] rounded-full mr-2"
                  />
                  <div className="text-blue-300 mt-2">
                    <h3>{data?.shop?.name}</h3>
                    <h5 className="pb-3 text-[15px] text-black">
                      ({data?.shop?.ratings}) Rating
                    </h5>
                  </div>
                </div>
                <div className=" flex">
                  <button
                    className="bg-black rounded-md md:h-12 h-15 text-white w-[40%] flex item-center"
                    onClick={handleMessageSubmit}
                  >
                    <span className="ml-4 mt-3">Send Message</span>
                    <AiOutlineMessage className="ml-2 mt-4" />
                  </button>
                  <h5 className="text-[18px] text-red-400 ml-5 font-semibold mt-2">
                    {data?.total_sell} Sold Out
                  </h5>
                </div>
                <div className="pt-[7px] pl-[5px] pr-[5px]">
                  <h1 className="text-[20px]">{data?.name}</h1>
                  <p>{data?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailCart;
