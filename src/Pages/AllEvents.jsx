import React from "react";
import Header from "../Layout/Header";
import Events from "./Events";

const AllEvents = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <Events active={true} />
      <Events active={true} />
    </div>
  );
};

export default AllEvents;
