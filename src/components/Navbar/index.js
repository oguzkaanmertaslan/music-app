import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "../Details";
import Homepage from "../Homepage";
const Navbar = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/details" />
        </nav>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    </div>
  );
};
export default Navbar;
