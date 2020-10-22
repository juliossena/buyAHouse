import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './shared/components/header/Header';
import BuyHouse from './features/buyHouse';
import Home from './features/home';

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/buy"
              component={BuyHouse}
            />
            <Route
              exact
              path="/"
              component={Home}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
