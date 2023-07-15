import React from "react";
import { useState } from "react";
import { productData } from "../Static/data";

const BestDeal = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
  }, []);

  return <div></div>;
};

export default BestDeal;
