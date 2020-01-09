import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

import {createStore} from 'redux';
import reducer from  './reducer';

const initialState = {tech: "React"};

const store = createStore(reducer, initialState);

class App extends Component {
  // removing the state first
  // state = {
  //   tech: "React"
  // };
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
