import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import logger from "redux-logger";
import { reduxBatch } from "@manaflair/redux-batch";
import createRootReducer from "./reducers";

import { routerMiddleware } from 'connected-react-router'
import { history } from "redux/store";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer:  createRootReducer(history),
    middleware: [routerMiddleware(history),...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [reduxBatch]
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    const newRootReducer = require("./reducers").default;
    module.hot.accept("./reducers", () => store.replaceReducer(newRootReducer));
  }

  return store;
}





