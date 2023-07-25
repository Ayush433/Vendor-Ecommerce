import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { productData, categoriesData } from "../Static/data";
import ProductCart from "./ProductCart";

const ProductPage = ({}) => {
  const [searchParams] = useSearchParams();
  const categoriesData = searchParams.get("category");
  const searchTerm = searchParams.get("q");
  const [data, setData] = useState([]);

  console.log("categoriesData", categoriesData);
  console.log("searchTerm", searchTerm);

  useEffect(() => {
    if (categoriesData === null && searchTerm === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      if (categoriesData === null && searchTerm) {
        const d =
          productData && productData.filter((i) => i?.name === searchTerm);

        setData(d);
        console.log("d", d);
      } else {
        if (categoriesData && searchTerm === null) {
          const d =
            productData &&
            productData.filter((i) => i.category === categoriesData);
          setData(d);
        }
      }
    }
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
      <Footer />
    </div>
  );
};

export default ProductPage;
