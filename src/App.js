import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}
