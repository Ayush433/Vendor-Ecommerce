import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsPaypal, BsTwitter } from "react-icons/bs";
import { FaCcMastercard, FaStripe } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../Static/data";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-11 px-4 bg-[#342ac8] py-7">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-[#56d879]"> Subscribe</span> us for latest{" "}
            <br /> Events and Offers
          </h1>
          <div>
            <input
              type="email"
              required
              placeholder="Enter Your Mail"
              className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button className="bg-[#56d789] hover:bg-teal-500 duration-300 px-5 py-2 rounded-md text-white md:w-auto w-full">
              Submit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:px-8 px-2 py-10 sm:text-center md:mt-[60px]">
          <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center cursor-pointer">
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX/////AwL/AAD/YWH/MDD/9PT/hob/paX/3Nz/6+v/v7//8fL/XF3/jo7/TEz/dHT/a2v/tLT/UlL/lpb/yssuLjD/ISH5+fn/ZGT/vb3/xsb/4uL/uLj/cHA8PD4iIiV1dXb/Rkb/KSn/kZHi4uKgoKHr6+tYWFk0NDZtbW4iPD6FlZYwP0H/fHzJwMD/Gxv/oKD/PDyAgIHLy8yysrOQkJEZGR3T1NTkAADcEBBANzmZPT80OTv3Kip+iooiMTOqv8C6XkovAAAFDklEQVR4nO2Za2OiOBSG41GrIFrFCyq1Vlst06lVp7OdmZ3r//9VewIEA5WuF9St+z4fWkIg5uHkCkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAfxbnbjKZ3DmnrsbhmFwP2+328Hpy6oociOk9+w2Hw7bXvp+eujKHwOHwfXqeOtPP9+x4ji31Q/v6S3Dk/NX2Ppy2Mofg7sV7jhI33svdCetyGG7an1aJqefdnKwmB8Lx2s9a8sbzzq0nOi+e3i4n7eHZGQ7buuHnszT8oiWfzs9wOoz1w+dsDSt0JCpC5FKyvj5c61m564ev6y7LabWtbG5YpNxRoKIQhfW/Rd8e/s6tsqThtzVXUmFVW1naNoZZhiqVVEOi748/fmqGP388ficK85KGfjC3NaRCN39w7HTD+i/vd18z7P/2ftWDdEePrTS08/kuF7OtYXXzy/cixXD2cfgYM3wcfpxR0GATrdSnur3hxUF8XpPWSs0/T7ZmaD/96alWus7w4r0ZsuIyrpJbUspI4/P+DHOUEEqmszI0zeBvWeWYvXDi7ZuGurxluuqcG5XhBrcKYZghYZ7bKwuNNMPN2Nuw6A/oTSJlY0Tz6pyW6nKbFupcNOvKITw46qmpoRmkFzRbYxiM936cKJoVwmkgEcHYcSaGZe72KmdlWKBouLWoFJ0bhedGkaFJy5JkEYauFO8AgSEtm9zPas0x//L8thuIWguzdBlIj5vhsEP8FKsWZWvYoXqUEzOk1mvDsPoXpBnmY4WvNxwIdrkVNf7ljriS8exwq+amU8zLRI0bkopgl2uRpSHfO1/l6IZj5aAZNoiu+OCKqLQytDYwrEvDamjYIL/q8jFZFc7QDXOyQS0pQ0MzClXS0ByHwdUM3YXss3zVwt3LkMjlY5J9zpDdW4+hcLmM7Axz89jqRjdstYgaCcMyJ5b8iC3Ze3cwlN13Lg27PCIFDhbfoRvOxMA11GCTRQxl6SmGvFQiN2nodGQlHd3QdssSYwPDwahWs6VhSbVEDqKrGRKVi1yAlaFhrsMDQIoh/1kmDaVa+E8ZxmeLNw0DGnL0VksaKhu6ISu5Bk9B2RmWWn6F1xu6cvxLGLKCnB41w0L1gpn1NzCc8Y6j/mYMm6LFiw2HKDNDJzaYJgxlXVpJQ+GnytvNFsl+OBC3ocNIJpUh+8qeMxOz7Az9LVy0Ckkaii5XKJ8wFAnDncZSQ4yDZU5ZHkSGthxH+TdbmRpyZftphtxcLgfZG8oZkOd6orHrb/1qclSTs0eDwyy3iyJophkZ8sCt7n5lyA+TL87IMLamGVWEI8ffi2BNUzSMSktOhn5k8yqmGRnyc7PSDP2H+2+GRYmzMpTJuOGlqPMCpiFfRsx5Mep3uVmv3G/O/eOCv7S9pWUjWLPmStVsDY1wbtcMx9FSpxAZjtcZRnuLhTIMMDVDWji8cnl7bxG00sReY39Dywpu61m2b1ax7LCcga1sDNu6Uue0/aEdhr1lB6+d1EU9K3gL1dING/1oqbkV72ePv34Hf06GuwLDNP4fhsd/I7xLV9zjjfBxvltUNEPeiu5mWAknlW0Nj0H8y8yuMdzt29ORKMpVwl6MtdpuY2gf/ruT+vY02K+Iwaq29haGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO+afwDj1FWg1778GgAAAABJRU5ErkJggg=="
                alt="image"
                className="w-[25%] h-[25%] rounded-lg"
              />
            </Link>
            <br />
            <p className=" w-full mb-11">
              The home and elements needed to create beautiful products.
            </p>
            <div className="flex items-center mt-[35px] gap-5 cursor-pointer">
              <BiLogoFacebook size={25} />
              <BsInstagram size={25} />
              <BsTwitter size={25} />
              <BsLinkedin size={25} />
            </div>
          </ul>

          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Company</h1>
            {footerProductLinks.map((link) => {
              return (
                <>
                  <li key={link?.name}></li>
                  <Link
                    to={link?.link}
                    className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                  >
                    {link?.name}
                  </Link>
                </>
              );
            })}
          </ul>
          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Shop</h1>
            {footercompanyLinks.map((link) => {
              return (
                <>
                  <li key={link?.name}></li>
                  <Link
                    to={link?.link}
                    className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                  >
                    {link?.name}
                  </Link>
                </>
              );
            })}
          </ul>
          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Support</h1>
            {footerSupportLinks.map((link) => {
              return (
                <>
                  <li key={link?.name}></li>
                  <Link
                    to={link?.link}
                    className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                  >
                    {link?.name}
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
          <span className="md:ml-[150px]">
            <span className="flex md:gap-2 cursor-pointer ml-11 md:ml-0 text-white">
              {" "}
              <AiOutlineCopyrightCircle size={20} />
              2023 Kinemel Jhola . All right reserved
            </span>
          </span>
          <span className="cursor-pointer  hover:text-teal-400 ">
            Terms. Privacy Policy
          </span>
          <span className="flex gap-9 text-white md:mb-6 ml-8 md:ml-0 lg:ml-0">
            <BsPaypal size={35} className="hover:text-blue-500" />
            <FaCcMastercard size={40} className="hover:text-red-300" />
            <RiVisaFill size={40} className="hover:text-blue-700" />
            <FaStripe size={40} className="hover:text-purple-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
