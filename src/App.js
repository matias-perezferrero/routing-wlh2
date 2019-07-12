import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            padding: 20
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
        </div>

        <Routes />
      </div>
    );
  }
}

export default App;
