import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = ({ categoriesData, setDropDown }) => {
  const nav = useNavigate();
  const submitHandle = (category) => {
    nav(`/products?category=${category.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="pb-4 w-[27px] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((category, index) => (
          <div
            key={index}
            className=""
            onClick={() => {
              submitHandle(category);
            }}
          >
            <img
              src={category.image_Url}
              alt=""
              className="w-[25px] h-[25px] ml-1 select-none object-contain"
            />
            <h3 className="m-3 cursor-pointer select-none">{category.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
