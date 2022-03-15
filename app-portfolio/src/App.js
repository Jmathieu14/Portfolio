import React from 'react';
import './App.css';
import Home from './Home';
import ExampleWork from './ExampleWork';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/example-work">
            <ExampleWork />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
