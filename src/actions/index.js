import superagent from "superagent";

export const fetchBusData = () => ({
  types: [
    "FETCH_BUS_DATA_REQUEST",
    "FETCH_BUS_DATA_SUCCESS",
    "FETCH_BUS_DATA_FAILURE"
  ],
  callAPI: () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "http://api.translink.ca/rttiapi/v1/buses?apikey=";
    const token = process.env.REACT_APP_TRANSLINK_API_TOKEN;
    return superagent
      .get(`${proxy}${url}${token}`)
      .set("Accept", "application/json")
      .then(res => JSON.parse(res.text));
  }
});
