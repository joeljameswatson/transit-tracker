import * as api from "api";

export const fetchBusData = () => ({
  types: [
    "FETCH_BUS_DATA_REQUEST",
    "FETCH_BUS_DATA_SUCCESS",
    "FETCH_BUS_DATA_FAILURE"
  ],
  callAPI: api.fetchBusData
});
