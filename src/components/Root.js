import React from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import Map from "./Map";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default Root;
