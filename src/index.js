import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styled/GlobalStyle";
import theme from "./styled/theme.js";
import createStore from "./store/configureStore";

import "./index.css";
import App from "./App";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Normalize />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>{" "}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
