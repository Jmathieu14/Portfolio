import React from 'react';
import './App.css';
import Home from './Home';
import ExampleWork from './ExampleWork';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/index.html", "/200.html"]}>
          <Home />
        </Route>
        <Route path={["/example-work", "/example-work/index.html"]}>
          <ExampleWork />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
