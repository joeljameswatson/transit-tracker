import React from "react";
import BusMarker from "./BusMarker";

const MarkerList = ({ busData }) => {
  const list = busData.map((bus, index) => (
    <BusMarker key={index} latitude={bus.Latitude} longitude={bus.Longitude} />
  ));

  return <React.Fragment>{list}</React.Fragment>;
};

export default MarkerList;
