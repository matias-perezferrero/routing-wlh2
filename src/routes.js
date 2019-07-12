import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Store from "./components/Store";
import StoreHome from "./components/StoreHome";
import Products from "./components/Products";

export default class Routes extends Component {
  constructor() {
    super();

    this.state = {
      information: "stuff"
    };
  }
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
          information={this.state.information}
        />
        {/* <Route
          path="/store"
          render={props => {
            return (
              <Store {...props} information={this.state.information}>
                <Route path="/store" exact component={StoreHome} />
                <Route path="/store/:category" component={Products} />
              </Store>
            );
          }}
        /> */}
        <Route path="/store" component={Store} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

function NotFound(props) {
  return (
    <div>
      <h1>404 page not found</h1>
    </div>
  );
}
