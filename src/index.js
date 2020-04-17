import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

/* NOTE: if you're placing everything in single file, then STORE must be created after action-creators and reducers, to make store and dispatch work */

//.....................ACTION -  Describes what user wants to do
//Action is simply a function which returns an object
//Simple Increment and Decrement actions
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//.....................REDUCER - Based on what action describes, it changes the state in the store to next state
//Reducer is also a function which returns an object
//Reducer takes two arguments, a "state" and an "action"
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

//.....................STORE - GLOBALIZED STATE
//it takes reducer as an argument
let store = createStore(counter);
//displaying the changes in the console by subscribing to store
store.subscribe(() => {
  console.log(store.getState());
});

//.....................DISPATCH - Initializes/executes an action, sending an action to reducer, which in turn modify the state
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
