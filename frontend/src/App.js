// import package and file
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import History from "./history";
import "./App.css";
// ที่รวม Routh ต่างๆ
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/history" exact>
          <History />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
