import React from "react";
import { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineAlert,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { productData } from "../Static/data";
import ProductDetailCart from "./ProductDetailCart";

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
          <span className="font-semibold mr-9 text-[17px] text-[#68d284]">
            {data?.total_sell} Sold
          </span>
        </div>
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5 "
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove From WishList"
            />
          ) : (
            <AiOutlineHeart
              size={28}
              className="cursor-pointer absolute right-2 top-5 "
              onClick={() => setClick(!click)}
              color={click ? "red" : "black"}
              title="Add to WishList"
            />
          )}
          <AiOutlineEye
            size={28}
            className="cursor-pointer absolute right-2 top-[55px] "
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick View"
          />
          <AiOutlineShoppingCart
            size={28}
            className="cursor-pointer absolute right-2 top-[95px] "
            onClick={() => setOpen(!open)}
            color="#444"
            title="Add to Cart"
          />
          {open ? <ProductDetailCart setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCart;
