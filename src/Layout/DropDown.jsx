import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = ({ catagoriesData, setDropDown }) => {
  const nav = useNavigate();
  const submitHandle = (category) => {
    nav(`/products?category=${category?.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="pb-4 w-[107px] absolute z-30 rounded-b-md shadow-sm">
      {catagoriesData &&
        catagoriesData.map((category, index) => {
          return (
            <>
              <div
                key={index}
                className="w-[400%] h-full bg-white flex"
                onClick={() => {
                  submitHandle(category);
                }}
              >
                <img
                  src={category?.image_Url}
                  alt=""
                  className="w-[55px] h-[55px] ml-1 select-none object-contain"
                />
                <h3 className="m-3 cursor-pointer select-none">
                  {category?.title}
                </h3>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default DropDown;
