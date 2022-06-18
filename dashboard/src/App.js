import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <div>
              <h1>index</h1>
            </div>
          </Route>
          <Route exact path="/profile/:profile_id">
            <h1>profile</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
