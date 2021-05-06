import { useContext } from "react";
import Parallax from "../components/Parallax";
import { LangContext } from "../context/LangContext";

import Pictures from "../components/Pictures";

const Index = () => {
  const { lang } = useContext(LangContext);

  return (
    <>
      <Pictures />
      <Parallax
        title={lang.Home.parallaxTitle01}
        css={lang.Home.parallaxCss01}
      />
    </>
  );
};

export default Index;
