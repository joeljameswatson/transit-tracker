import { combineReducers } from "redux";
import { createViewportReducer } from "redux-map-gl";

const viewPortReducer = createViewportReducer({
  latitude: 49.19050364218905,
  longitude: -123.03810484819547,
  zoom: 9
});

const busData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BUS_DATA_SUCCESS":
      return action.response;
    default:
      return state;
  }
};

export default combineReducers({
  busData,
  map: viewPortReducer
});

export const getBusData = state => state.busData;
export const getMap = state => state.getMap;
