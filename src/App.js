import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Headers from "./Headers";

function App() {
  return (
    <div className="App">
      <Headers />
      <Router>
        <Switch>
          <Route path="/chat"></Route>
          <Route path="/"></Route>
        </Switch>
        {/* Tinder Cards*/}
        {/* Buttons below tinder cards*/}

        {/* Chats Screen*/}
        {/* Individual chat screen*/}
      </Router>
    </div>
  );
}

export default App;
