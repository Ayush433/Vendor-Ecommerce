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
        <div className="w-[90%] absolute text-justify ml-[120px]  md:mt-[150px]">
          <h1 className="md:text-[45px] mt-[40px] text-[20px] leading-[1,2] text-white font-extrabold capitalize md:ml-[450px] mb-11">
            Best Collection for <br />
            home Decoration
          </h1>
          <Link to="/products">
            <div className="md:ml-[560px] md:mt-[30px]">
              <button class="rounded-t-[10px] rounded-b-[10px] md:h-[60px] md:w-[130px] w-[150px] h-[40px] bg-white text-black ">
                Save Changes
              </button>
            </div>
          </Link>
          {/* <p className="pt-4 text-[16px] font-Poppins text-white md:ml-[450px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aperiam nam ut quia eveniet quis voluptates magnam, explicabo
            voluptatibus dolores sed quo iste? Voluptas corrupti dolorum cum
            quibusdam laboriosam doloremque?
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
