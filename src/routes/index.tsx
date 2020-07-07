import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Experiences from "../pages/Experiences";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/experiences" exact component={Experiences} />
    </Switch>
  );
};

export default Router;
