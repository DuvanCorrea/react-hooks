import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokeReducer from "./pokeDucks";

const rootReducers = combineReducers({
  pokemons: pokeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
