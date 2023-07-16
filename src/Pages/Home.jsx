import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Layout/Header";
import BestDeal from "./BestDeal";
import Categories from "./Categories";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeal />
    </div>
  );
};

export default Home;
