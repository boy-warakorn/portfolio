import { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Navbar from "./UI/Navbar";
import "./App.css";

function App() {
  return (
    <Fragment>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap"
        rel="stylesheet"
      ></link>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default withRouter(App);
