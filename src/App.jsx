import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./About.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Link to="/">
          <h1>Inicio...</h1>
        </Link>
        <Link to="/about">
          <h1>About...</h1>
        </Link>
        <Link to="/contact">
          <h1>Contact...</h1>
        </Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">Contact us...</Route>
          <Route path="/a/b">This is b</Route>
          <Route path="/" exact>
            Home
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
