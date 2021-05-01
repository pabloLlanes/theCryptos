import React, { useContext, useEffect } from "react";
import { LangContext } from "../context/LangContext";

const Intro = () => {
  const english = { Header: { title: "hello", lang: "eng" } };

  const { setLang } = useContext(LangContext);

  useEffect(() => {}, []);
  const handleButton = (e) => {
    e.preventDefault();
    setLang(english);

    console.log("click button");
  };

  return (
    <>
      <div className="flex flex-row items-center justify-around">
        <button className="bg-green-100 p-8" onClick={handleButton}></button>
      </div>
    </>
  );
};
export default Intro;
