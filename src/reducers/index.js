import { combineReducers } from "redux-immutable";
import { createViewportReducer } from "redux-map-gl";
import { List } from "immutable";

const viewPortReducer = createViewportReducer({
  latitude: 49.19050364218905,
  longitude: -123.03810484819547,
  zoom: 9
});

const busData = (state = List(), action) => {
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

export const getBusData = state => state.get("busData");
export const getMap = state => state.get("map");
