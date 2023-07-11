import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../Static/data";

const Navbar = ({ active }) => {
  return (
    <div className={"flex "}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex ">
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#17dd1f]"
                  : "text-black 800px:text-[#fff]"
              } pb-[20px] 800px:pt-6 sm:font-[500] px-3 md:px-6 cursor-pointer items-center}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
