//import React from "react";
import React, { useState } from "react";

import "./App.css";
import Sidebar from "./Sidebar";
import ChatRoom from "./ChatRoom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  //const [{ user }] = useStateValue();
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__container">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomid">
                <ChatRoom />
              </Route>
              <Route path="/">
                <ChatRoom />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
