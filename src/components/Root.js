import React from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <div>hello universe</div>
  </Provider>
);

export default Root;
