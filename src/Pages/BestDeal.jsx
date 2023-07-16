import React, { useEffect } from "react";
import { useState } from "react";
import { productData } from "../Static/data";
import ProductCart from "./ProductCart";

const BestDeal = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div>
      <div className="">
        <h1 className="font-bold  text-3xl">Best Deals</h1>
        <div className="">
          {data &&
            data.map((i, index) => {
              return <ProductCart data={i} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
