import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Layout/Header";
import { productData } from "../Static/data";
import FeaturesDeal from "./FeaturesDeal";
import ProductCart from "./ProductCart";

const ProductPage = ({ catagoriesData }) => {
  const [searchParams] = useSearchParams();
  const categoriesData = searchParams.get("category");
  console.log("categoriesData", categoriesData);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (categoriesData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoriesData);
      setData(d);
    }
    //   window.sc
  }, []);

  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 ">
        {data && data.map((i, index) => <ProductCart data={i} key={index} />)}
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[10px] text-[20px] ">
            No Products Found{" "}
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default ProductPage;
