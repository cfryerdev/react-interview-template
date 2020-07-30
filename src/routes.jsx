import React from "react";
import { Switch, Route } from "react-router";

import Home from "./Components/Home";
import List from "./Components/List";
import View from "./Components/View";

const NotFound = () => (
  <div className="text-center">
    Oops what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movies" exact component={List} />
    <Route path="/movies/:id" exact component={View} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
