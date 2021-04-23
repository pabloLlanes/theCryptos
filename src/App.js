import React from "react";

import data from "./data/data";

import Header from "./Components/Header";
import Parallax from "./Components/Parallax";

import useDarkMode from "./hooks/useDarkMode";
import Content from "./Components/content";

function App() {
  useDarkMode();
  return (
    <>
      <Header header={data.header} />

      <Parallax parallax={data.parallax01} />
      <Parallax parallax={data.parallax01} />
      <Content />
    </>
  );
}
export default App;
