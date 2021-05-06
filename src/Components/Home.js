import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";

import Parallax from "./Parallax";
import Coins from "./Coins";

const Home = () => {
  const { lang } = useContext(LangContext);

  return (
    <>
      <Parallax
        title={lang.List.parallaxTitle01}
        css={lang.List.parallaxCss01}
      />

      <Coins />

      <Parallax
        title={lang.List.parallaxTitle02}
        css={lang.List.parallaxCss02}
      />
    </>
  );
};

export default Home;
