import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Restaurant from "./pages/Restaurant";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={() => <Home>Home</Home>} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:restaurant" component={Restaurant} />
          <Route component={Error} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}
