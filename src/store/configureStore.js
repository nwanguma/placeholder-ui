import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import testReducer from "../reducers/test";

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      test: testReducer,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
}
