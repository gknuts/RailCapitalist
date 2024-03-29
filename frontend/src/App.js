import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import railApp from "./reducers";

import RailCapitalist from "./components/RailCapitalist";
import NotFound from "./components/NotFound";

let middles = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(...middles),
)
let store = createStore(railApp, enhancer);

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={RailCapitalist} />
            <Route component={NotFound} />
          </Switch>
          </BrowserRouter>
        </Provider>
      );
  }
}

export default App;
