import superagent from "superagent";
import { fromJS } from "immutable";

export const fetchBusData = () => {
  const proxy = process.env.REACT_APP_CORS_PROXY;
  const url = "https://api.translink.ca/rttiapi/v1/buses?apikey=";
  const token = process.env.REACT_APP_TRANSLINK_API_TOKEN;
  return superagent
    .get(`${proxy}${url}${token}`)
    .set("Accept", "application/json")
    .then(res => {
      const parsed = JSON.parse(res.text);
      return fromJS(parsed);
    });
};
