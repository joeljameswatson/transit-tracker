import React from "react";
import { Marker } from "react-map-gl";

const BusMarker = ({ latitude, longitude }) => (
  <Marker latitude={latitude} longitude={longitude}>
    <div>x</div>
  </Marker>
);

export default BusMarker;
