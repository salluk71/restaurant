import React from "react";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home name={`Props through component`}>Home</Home>}
          />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}
