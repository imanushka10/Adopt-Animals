import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext"




const App = () => {
  const theme = useState("peru");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams themeColor={theme}
              path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ ThemeContext.Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));