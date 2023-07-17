import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="relative bg-no-repeat mt-[34px] md:mt-0">
        <img
          src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="mih-h-[70vh] md:max-h-[70vh] w-full absolute"
        />
        <div className="w-[60%] absolute text-justify ml-[120px] mt-[19px] md:mt-[150px]">
          <h1 className="md:text-[45px] mt-[40px] text-[20px] leading-[1,2] text-white font-extrabold absolute capitalize md:ml-[350px]">
            Best Collection for <br />
            home Decoration
          </h1>
          <Link to="/products">
            <div className="md:ml-[480px] md:mt-[180px] mt-[100px]">
              <button class="rounded-t-[10px] rounded-b-[10px] absolute  md:h-[60px] md:w-[130px] w-[150px] h-[40px] bg-white text-black ">
                Save Changes
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
