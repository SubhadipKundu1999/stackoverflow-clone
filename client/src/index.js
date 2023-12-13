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

// replace console.* for disable log on production
if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 
  
    <Provider store={store}>
      <App />
    </Provider>

);
