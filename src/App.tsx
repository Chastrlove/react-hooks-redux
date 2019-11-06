import React from "react";
import "./App.css";
import { FormDemo } from "components/FormDemo";
import { Provider } from "react-redux";
import { history, store } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" render={() => <FormDemo />} />
            <Route render={() => <div>Miss</div>} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
