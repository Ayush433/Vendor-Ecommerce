import React from "react";
import { useState } from "react";
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
      <div className="">
        <div className=""></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data?.image_Url[0]?.url}
            alt="image"
            className="w-full h-[170px] object-contain"
          />
          <h1>{data?.category}</h1>
        </Link>
      </div>
      ;
    </>
  );
};

export default ProductCart;
