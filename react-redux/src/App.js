import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./App.scss";

// components
import GitApi from "./components/gitComponent/GitApi";
import Header from "./components/Header";
import Trump from "./components/tronald/Trump";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <div className="pages">
            <Route path="/trk">
              <Trump />
            </Route>
            <Route exact path="/">
              <GitApi />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
