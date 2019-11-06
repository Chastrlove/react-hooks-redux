import { loadState } from "./localStorage";
import configureAppStore from "./configureStore";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./reducers";
import { Action } from "redux";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const persistedState = loadState();

export const store = configureAppStore(persistedState);

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
