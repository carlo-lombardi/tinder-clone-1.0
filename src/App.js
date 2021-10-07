import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Headers from "./Headers";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Headers backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Headers backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Headers />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
