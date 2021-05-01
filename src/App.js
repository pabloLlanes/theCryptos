import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { spanish } from "./data/data";

import useDarkMode from "./hooks/useDarkMode";

import Header from "./components/Header";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import NotFound404 from "./pages/NotFound404";

import { LangContext } from "./context/LangContext";
import { CoinContext } from "./context/CoinContext";
import { useFetch } from "./hooks/useFetch";

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
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />

            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/notfound404" component={NotFound404} />

            <Redirect to="/notfound404" />
          </Switch>
        </LangContext.Provider>
      </CoinContext.Provider>
    </Router>
  );
}
export default App;
