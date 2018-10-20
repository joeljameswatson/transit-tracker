export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_BUS_DATA_SUCCESS":
      return action.response;

    default:
      return state;
  }
};

export const getBusData = state => state;
