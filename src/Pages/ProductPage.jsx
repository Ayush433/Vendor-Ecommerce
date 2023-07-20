import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../Layout/Header";
import { productData } from "../Static/data";
import ProductCart from "./ProductCart";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const categoriesData = searchParams.get("category");
  const searchTerm = searchParams.get("q");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoriesData && searchTerm) {
      const filteredData =
        productData &&
        productData.filter(
          (item) =>
            item.category === categoriesData &&
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setData(filteredData);
    }
    // If only category is present
    else if (categoriesData && !searchTerm) {
      const filteredData =
        productData &&
        productData.filter((item) => item.category === categoriesData);
      setData(filteredData);
    }
    // If only search term is present
    else if (!categoriesData && searchTerm) {
      const filteredData =
        productData &&
        productData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setData(filteredData);
    }
    // If neither category nor search term is present, show all products sorted by total_sell
    else {
      const sortedData =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(sortedData);
    }
  }, [categoriesData, searchTerm]);

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
