import React from "react";
import ReactMapGL from "react-map-gl";
import MarkerList from "./MarkerList";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ mapState, onChangeViewport, busData }) => {
  return (
    <ReactMapGL
      {...mapState}
      width={400}
      height={400}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API_TOKEN}
      onViewportChange={onChangeViewport}
    >
      <MarkerList busData={busData} />
    </ReactMapGL>
  );
};

export default Map;
