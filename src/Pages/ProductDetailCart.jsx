import React from "react";
import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const ProductDetailCart = ({ data, setOpen }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const handleMessageSubmit = () => {
    console.log();
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const IncrementCount = () => {
    setCount(count + 1);
  };
  const handleShoppingCart = () => {};
  return (
    <div className="bg-#fff">
      {data ? (
        <div className="fixed h-screen w-full top-7 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[100%] md:w-[60%] h-[75vh] md:[90%] overflow-y-scroll md:h-[75vh] bg-white rounded-md shadow-sm relative p-4 ">
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
                    className="bg-black rounded-md md:h-12 md:h-15 h-[50px] text-white md:w-[40%] w-[150px] flex item-center"
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
                  <h1 className="text-[20px] font-semibold">{data?.name}</h1>
                  <p>{data?.description}</p>
                </div>

                <div className="text-green-500">
                  <div className="flex">
                    <h5 className="mt-[7px] font-semibold">
                      Rs.
                      {data?.price === 0 ? data?.price : data?.discount_price}
                    </h5>
                    <h4 className="ml-3 text-red-600 line-through">
                      {data?.price ? data.price + "Rs." : null}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-between pr-3 ">
                  <div>
                    <div class="inline-flex">
                      <button
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                        onClick={decrementCount}
                      >
                        Prev
                      </button>
                      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                        {count}
                      </span>
                      <button
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={IncrementCount}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  {click ? (
                    <AiFillHeart
                      size={30}
                      className="cursor-pointer "
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Remove From WishList"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer  "
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "black"}
                      title="Add to WishList"
                    />
                  )}
                </div>
                <button
                  className="bg-black rounded-md md:h-12 mt-2 md:h-15 h-[30px] text-white md:w-[40%] w-[150px] flex item-center"
                  onClick={handleShoppingCart}
                >
                  <span className="ml-4 mt-3">Add to Cart</span>
                  <AiOutlineShoppingCart className="ml-2 mt-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailCart;
