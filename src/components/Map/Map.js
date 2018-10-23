import React from "react";
import ReactMapGL from "react-map-gl";
import Immutable from "immutable";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import ScatterplotOverlay from "./ScatterPlotOverlay";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ mapState, onChangeViewport, busData }) => {
  const busses = Immutable.fromJS(busData);

  const lngLatAccessor = bus => {
    return [bus.get("Longitude"), bus.get("Latitude")];
  };

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
            <ScatterplotOverlay
              locations={busses}
              dotRadius={3}
              globalOpacity={0.8}
              compositeOperation="lighter"
              dotFill="blue"
              renderWhileDragging={true}
              lngLatAccessor={lngLatAccessor}
            />
          </ReactMapGL>
        );
      }}
    </AutoSizer>
  );
};

export default Map;
