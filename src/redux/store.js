import { createStore, applyMiddleware, combineReducers } from "redux";
import formReducer from "./form/formReducer";
import thunk from "redux-thunk";
import loggerMiddleware from "redux-logger";

const rootReducer = combineReducers({
  formReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);

export default store;
