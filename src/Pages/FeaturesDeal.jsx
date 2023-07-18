import React from "react";
import { useState } from "react";
import { productData } from "../Static/data";
import ProductCart from "./ProductCart";

const FeaturesDeal = () => {
  const [data, setData] = useState(false);
  return (
    <div className="">
      <h1 className="font-bold ml-5  text-3xl">Features Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full mt-9">
        {productData &&
          productData.map((i, index) => {
            return <ProductCart data={i} key={index} />;
          })}
      </div>
    </div>
  );
};

export default FeaturesDeal;
