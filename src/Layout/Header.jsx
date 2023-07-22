import React from "react";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, useParams, useNavigate } from "react-router-dom";
import { productData, categoriesData } from "../Static/data";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../ReduxToolkit/userSlice";
import Cart from "../Pages/Cart";
import OpenWhishList from "../Pages/OpenWhishList";

const Header = ({ activeHeading }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filterProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filterProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  const navigate = useNavigate();
  const handleItemClick = (productName) => {
    setSearchTerm("");
    setSearchData("");
    // navigate(`/products?q=${productName}`);
  };

  return (
    <div>
      <div className="relative ">
        <div className=" flex h-[40px] my-[10px]  items-center justify-between">
          <div className="absolute">
            <Link to="">
              <img
                src="data:image/png;base64,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"
                alt="image"
                className="w-[80%] h-[80%]"
              />
            </Link>
          </div>
          {/* search bar  */}
          <div className="w-[50%] relative ml-[200px] mt-7 md:ml-[400px]">
            <input
              type="text "
              placeholder="Search Prodiuct ...."
              value={searchTerm}
              onChange={handleSearch}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i?.name;
                    // const p = d.replace(/\s+/, "-");
                    return (
                      <div onClick={() => handleItemClick(d)} key={index}>
                        <Link to={`/products?q=${d}`}>
                          <div className="w-full flex item-start py-3">
                            <img
                              src={i.image_Url}
                              alt="not found"
                              className="h-[40px] w-[40px] mr-[10px]"
                            />
                            <h1>{i.name}</h1>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className=" text-[#fff] flex items-center bg-black md:mr-[110px] md:mt-7 md:text-lg font-semibold md:p-2 text-sm mt-7 ml-3 rounded-lg ">
            <button className="">Become Seller</button>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="relative flex justify-between w-full ">
        {/* Catagories */}
        <div
          className={`${
            active === true ? "shadow-sm fixed top-0 left-o z-10" : null
          } transition md:flex iteam-center justify-between w-[100%] bg-[#3321c8] h-[70px] mt-4`}
        >
          <div className="relative  ml-[35px] h-[60px] mt-[20px] md:mt-[10px] md:ml-[40px] w-[270px] md:hidden lg:block">
            <BiMenuAltLeft
              size={30}
              className="absolute top-3 left-2 mb-[200px]"
            />
            <button
              className="h-[100%] flex justify-between items-center pl-10 bg-white font-Poppins text-lg font-[500] select-none rounded-t-md "
              onClick={() => setDropDown(!dropDown)}
            >
              {" "}
              All Catagories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />

            {dropDown ? (
              <DropDown
                catagoriesData={categoriesData}
                dropDown={dropDown}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          {/* Navbar */}
          <div className="">
            <Navbar active={activeHeading} />
          </div>
          <div className="flex mr-4">
            <div
              className="relative cursor-pointer md:mr-[30px] md:mt-5"
              onClick={() => setOpenWishList(true)}
            >
              <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0  rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center"></span>
            </div>
            <div
              className="relative cursor-pointer md:mr-[30px] md:mt-5 "
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0  rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center">
                1
              </span>
            </div>
            <div className="relative cursor-pointer md:mr-[30px] md:mt-5 z-10">
              <CgProfile
                size={30}
                color="rgb(255 255 255 / 83%)"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              />
              {dropdownVisible && (
                <div className="absolute top-10 right-0 w-48 bg-white shadow-md rounded-md z-20">
                  {user ? (
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          to="/"
                          className="text-gray-800"
                          onClick={() => {
                            dispatch(clearUser());
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <>
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/login" className="text-gray-800">
                            Sign In
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/signUp" className="text-gray-800">
                            Register
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
            <div>{openCart ? <Cart setOpenCart={setOpenCart} /> : null}</div>

            <div>
              {openWishList ? (
                <OpenWhishList setOpenWishList={setOpenWishList} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
