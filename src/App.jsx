import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './shared/components/header/Header';
import BuyHouse from './features/buyHouse';
import Conclusion from './features/conclusion';

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={BuyHouse}
            />
            <Route
              exact
              path="/conclusion"
              component={Conclusion}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
