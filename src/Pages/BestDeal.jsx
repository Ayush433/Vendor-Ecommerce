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
        <div className=" mb-10 grid grid-cols-1 gap-[10px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[20px] xl-grid-cols-5 xl-gap-[30px] bg-neutral-50 md:w-[95%] md:ml-10 md:mt-9 rounded-md shadow-xl">
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
