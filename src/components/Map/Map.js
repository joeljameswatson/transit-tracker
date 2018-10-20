import React from "react";
import { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 49.3301815,
      longitude: -123.2717587,
      zoom: 9
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.busData.map((bus, index) => {
          return (
            <Marker
              key={index}
              latitude={bus.Latitude}
              longitude={bus.Longitude}
            >
              <div>X</div>
            </Marker>
          );
        })}
      </ReactMapGL>
    );
  }
}

export default Map;