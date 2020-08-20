import React, { Component } from "react";
import Details from "../Component/Details";
import Basket from "../Component/Basket/Basket";
import NotFound from "../Component/NotFound";
import ProductList from "../Component/ProductList";
import NavBar from "../Component/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Model from "../Component/Model";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/basket" component={Basket} />
          <Route component={NotFound} />
        </Switch>
        <Model />
      </Router>
    );
  }
}

export default Routes;
