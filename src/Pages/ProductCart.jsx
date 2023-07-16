import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { productData } from "../Static/data";

const ProductCart = ({ data }) => {
  console.log("data", data);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\+/g, "-");
  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-lg p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data?.image_Url[0]?.url}
            alt="image"
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link t0="/">
          <h5 className="text-blue-400">{data?.shop?.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data?.name?.length > 40
              ? data?.name?.slice(0, 40) + "..."
              : data?.name}
          </h4>
        </Link>
        <div className="flex cursor-pointer mr-2">
          <AiFillStar color="#F6BA00" size={20} />
          <AiFillStar color="#F6BA00" size={20} />
          <AiFillStar color="#F6BA00" size={20} />
          <AiFillStar color="#F6BA00" size={20} />
          <AiFillStar color="#F6BA00" size={20} />
        </div>
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className="mt-[12px]">
              ${data?.price === 0 ? data?.price : data?.discount_price}
            </h5>
            <h4 className="ml-3 text-red-600 line-through">
              {data?.price ? data.price + "$" : null}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
