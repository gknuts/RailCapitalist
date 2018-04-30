import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import RailCapitalist from "./components/RailCapitalist";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RailCapitalist} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
