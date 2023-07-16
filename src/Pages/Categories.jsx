import React from "react";
import { brandingData, categoriesData } from "../Static/data";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  // const navigate = useNavigate();
  const nav = useNavigate();
  console.log("brandingData", brandingData);
  console.log("cat", categoriesData);
  return (
    <>
      <div className="mt-[280px] md:mt-[590px]">
        <div className="flex justify-between items-center w-full shadow-sm bg-gray-300 p-5 rounded-md">
          {brandingData &&
            brandingData.map((item) => {
              return (
                <div className="" key={item.id}>
                  <h2 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-sm">{item.Description}</p>
                  {item.icon}
                </div>
              );
            })}
        </div>
      </div>
      <div className=" mb-10 grid grid-cols-1 gap-[50px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl-grid-cols-5 xl-gap-[30px] bg-neutral-50 md:w-[95%] md:ml-10 md:mt-9 rounded-md shadow-md">
        {categoriesData &&
          categoriesData.map((i) => {
            const handleSubmit = (i) => {
              nav(`products?category=${i.title}`);
            };
            return (
              <div
                className="w-full h-[150px] items-center justify-around cursor-pointer overflow-hidden flex "
                key={i.id}
                onClick={() => handleSubmit}
              >
                <h5 className="text-[18px] leading[1,3]">{i.title}</h5>
                <img src={i.image_Url} className="w-[120px] object-cover" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Categories;
