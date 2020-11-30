import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ReduxToolkit/toolkitStore";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor} from "./ReduxToolkit/toolkitStore"


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
