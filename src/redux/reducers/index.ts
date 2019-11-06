import reducer from "./todosSlice";
import formReducer from "./formSlice";
import { combineReducers } from "redux-starter-kit";
import { connectRouter } from "connected-react-router";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    todos: reducer,
    form: formReducer
  });

export type RootState = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
