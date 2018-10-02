import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routeapp from "./routeapp";
import "./components/homepage.css";
import "../node_modules/react-bootstrap/";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Reducersusers from "./reducers/Reducersusers";
import Reducersearchinf from "./reducers/Reducersearchinf";

let store = createStore(Reducersusers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routeapp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
