import React, { useState, useContext } from "react";

import Parallax from "./Parallax";
import Coins from "./Coins";
import Intro from "./Intro";

const Home = () => {
  return (
    <>
      <Parallax /> <Intro />
      <Coins />
    </>
  );
};

export default Home;
