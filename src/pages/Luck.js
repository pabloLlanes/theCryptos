import { useContext } from "react";
import Parallax from "../components/Parallax";
import RandomCoin from "../components/RandomCoin";
import { LangContext } from "../context/LangContext";

const Luck = () => {
  const { lang } = useContext(LangContext);
  return (
    <>
      <RandomCoin title={lang.Luck.parallaxTitle01} button={lang.Luck.button} />
      <Parallax
        title={lang.Luck.parallaxTitle02}
        css={lang.Luck.parallaxCss01}
      />
    </>
  );
};

export default Luck;
