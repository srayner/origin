import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "./reducers/app";
import people from "./reducers/people";
import families from "./reducers/families";
import person from "./reducers/person";
import search from "./reducers/search";
import { loadState, saveState } from "./data/local-storage";
import throttle from "lodash/throttle";

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const rootReducer = combineReducers({
  app,
  families,
  people,
  person,
  search
});
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
