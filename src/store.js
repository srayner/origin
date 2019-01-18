import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tree from "./reducers/tree";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const rootReducer = combineReducers({
  tree
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
