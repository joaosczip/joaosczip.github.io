import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../pages/About";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
