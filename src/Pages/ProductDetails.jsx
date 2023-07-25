import React, { useEffect } from "react";
import { useState } from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { productData } from "../Static/data";

const ProductDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const ProductName = name.replace(/-/g, "");
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const ProductName = name.replace(/-/g, "");
    const data = productData.find((i) => i?.name === ProductName);
    setData(data);
  }, []);
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
    <div>
      <Header activeHeading={6} />
      <div className="bg-white">
        {name ? (
          <div className="unset w-[90%] h-screen">
            <div className="w-ful mt-8">
              <div className="block  md:flex">
                <div className="">
                  <div className="md:ml-[200px] md:w-[200%] lg:-[200%]">
                    <img
                      src={data?.image_Url[select].url}
                      alt=""
                      className="md:w-[30%] w-[200%]"
                    />
                  </div>

                  <div className="w-full md:ml-[100px]">
                    <div className="flex">
                      <div
                        className={`${
                          select === 0 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={data?.image_Url[0].url}
                          alt="image"
                          className="h-[150px]"
                          onClick={() => setSelect(0)}
                        />
                      </div>
                      <div
                        className={`${
                          select === 1 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={data?.image_Url[1].url}
                          alt="image"
                          className="h-[150px]"
                          onClick={() => setSelect(1)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[50%] mr-[60px] pt-5">
                  <h1 className="font-bold text-xl">{data?.name}</h1>
                  <h3 className="pt-3">{data?.description}</h3>
                  <div className="flex pt-3 font-Roboto font-bold ">
                    <h5 className="mt-[7px] font-semibold">
                      Rs.
                      {data?.price === 0 ? data?.price : data?.discount_price}
                    </h5>
                    <h4 className="ml-3 text-red-600 line-through">
                      {data?.price ? data.price + "Rs." : null}
                    </h4>
                  </div>
                  <div>
                    <div class="flex md:mt-[50px] md:ml-5">
                      <button
                        class="bg-teal-400 hover:bg-teal-500-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                        onClick={decrementCount}
                      >
                        <AiOutlineMinusCircle size={25} />
                      </button>
                      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                        {count}
                      </span>
                      <button
                        class="bg-teal-400 hover:bg-teal-500 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={IncrementCount}
                      >
                        <AiFillPlusCircle size={25} />
                      </button>
                      <div className="md:ml-[400px]">
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
                    </div>
                    <button
                      className="bg-black rounded-md md:h-12 mt-2 md:h-15 h-[40px] text-white md:w-[30%] w-[150px] flex item-center md:ml-4 pb-7yt=-"
                      onClick={handleShoppingCart}
                    >
                      <span className="ml-4 mt-3 ">Add to Cart</span>
                      <AiOutlineShoppingCart className="ml-4 mt-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
