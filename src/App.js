import React, { useState } from "react";
import Seo from "./components/Seo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { spanish } from "./data/data";

import useDarkMode from "./hooks/useDarkMode";

import Header from "./components/Header";
import { LangContext } from "./context/LangContext";
import { CoinContext } from "./context/CoinContext";

import Index from "./pages/Index";
import List from "./pages/List";
import Luck from "./pages/Luck";

import { useFetch } from "./hooks/useFetch";
import Footer from "./components/Footer";
function App() {
  const [lang, setLang] = useState(spanish);

  const [data1, fetching] = useFetch();

  useDarkMode();

  return (
    <Router>
      <CoinContext.Provider value={(fetching, data1)}>
        <LangContext.Provider
          value={{
            lang,
            setLang,
          }}
        >
          <Seo />
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/list" component={List} />

            <Route exact path="/luck" component={Luck} />

            <Redirect to="/notfound404" />
          </Switch>
          <Footer />
        </LangContext.Provider>
      </CoinContext.Provider>
    </Router>
  );
}
export default App;
