import React from "react";
import Header from "../Layout/Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
    </div>
  );
};

export default Home;
