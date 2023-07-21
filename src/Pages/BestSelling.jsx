import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../Layout/Header";
import { productData } from "../Static/data";
import ProductCart from "./ProductCart";

const BestSelling = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full mt-9">
          {data &&
            data.map((i, index) => {
              return <ProductCart data={i} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
