import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Layout/Header";
import Categories from "./Categories";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="">
      <Header activeHeading={1} />
      <Hero />
      <Categories />
    </div>
  );
};

export default Home;
