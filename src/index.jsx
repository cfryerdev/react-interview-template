import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Routes from "./routes";

import "./Content/Styles/main.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
