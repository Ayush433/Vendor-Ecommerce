import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import BestDeal from "./BestDeal";
import Categories from "./Categories";
import Events from "./Events";
import FeaturesDeal from "./FeaturesDeal";
import Hero from "./Hero";
import Sponsored from "./Sponsored";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeal />
      <Events />
      <FeaturesDeal />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default Home;
