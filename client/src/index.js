import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import Reducers from "./reducers";
const store = createStore(
  Reducers,
   compose(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>

);
