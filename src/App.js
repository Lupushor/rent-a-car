import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Favorites from "./Favorites";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/favorites" component={Favorites} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
