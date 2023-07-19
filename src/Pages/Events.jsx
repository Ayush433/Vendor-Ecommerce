import React from "react";
import CountDown from "./CountDown";

const Events = ({ active }) => {
  return (
    <div className="">
      <h1 className="font-bold p-6  text-3xl"></h1>
      <div
        className={`w-full md:w-[70%] md:ml-[250px] block bg-white rounded-lg ${
          active ? "unset" : "mb-12"
        } lg:flex p-2 mb-10`}
      >
        <div className="w-full lg:-w[50%] m-auto">
          <img
            src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
            alt="image"
          />
        </div>
        <div className="w-full lg:-w[50%] flex flex-col justify-center md:mb-[250px] md:mt-[140px]">
          <h2 className="text-3xl font-bold">Iphone 14 Pro Max</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam
            nihil eveniet esse, dolore numquam consectetur ducimus officiis
            temporibus blanditiis molestiae itaque nemo velit exercitationem
            assumenda voluptate? Illo, sint? Quas!
          </p>
          <div className="flex py-2 justify-between">
            <div className="flex ">
              <h5 className="font-[500] text-[18px] text-red-300 pr-3 line-through">
                RS.1099
              </h5>
              <h5 className="font-bold text-[20px] font-Roboto text-[#333]">
                Rs.999
              </h5>
            </div>
            <span className="pr-3 font-semibold text-[17px] text-[#44a55e]">
              120 Sold
            </span>
          </div>
          <CountDown />
        </div>
      </div>
    </div>
  );
};

export default Events;
