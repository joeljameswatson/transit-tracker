import React from "react";
import { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import superagent from "superagent";
import "mapbox-gl/dist/mapbox-gl.css";

class Map extends Component {
  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    superagent
      .get(
        `${proxy}http://api.translink.ca/rttiapi/v1/buses?apikey=${
          process.env.REACT_APP_TRANSLINK_API_TOKEN
        }`
      )
      .set("Accept", "application/json")
      // .set("Content-Type", "application/json")
      // .set("Access-Control-Allow-Origin", "*")
      .then(res => {
        this.setState({ busses: JSON.parse(res.text) });
      });
  }
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 49.281473,
      longitude: -123.123984,
      zoom: 8
    },
    busses: []
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.state.busses.map(bus => {
          return (
            <Marker latitude={bus.Latitude} longitude={bus.Longitude}>
              <div>X</div>
            </Marker>
          );
        })}
      </ReactMapGL>
    );
  }
}

export default Map;
