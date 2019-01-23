import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "./reducers/app";
import people from "./reducers/people";
import families from "./reducers/families";
import person from "./reducers/person";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const rootReducer = combineReducers({
  app,
  families,
  people,
  person
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
