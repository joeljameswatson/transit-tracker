import React from "react";
import ReactMapGL from "react-map-gl";
import MarkerList from "./MarkerList";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ mapState, onChangeViewport, busData }) => {
  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <ReactMapGL
            {...mapState}
            width={width}
            height={height}
            mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API_TOKEN}
            onViewportChange={onChangeViewport}
          >
            <MarkerList busData={busData} />
          </ReactMapGL>
        );
      }}
    </AutoSizer>
  );
};

export default Map;
