import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "../reducers/auth";

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
}
