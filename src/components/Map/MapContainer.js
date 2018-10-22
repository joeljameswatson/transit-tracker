import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./Map";
import * as actions from "actions";
import { onChangeViewport } from "redux-map-gl";
import { getBusData } from "reducers";

export class MapContainer extends Component {
  componentDidMount() {
    setInterval(() => this.props.fetchBusData(), 5000);
  }

  render() {
    return (
      <Map
        busData={this.props.busData}
        mapState={this.props.mapState}
        onChangeViewport={this.props.onChangeViewport}
      />
    );
  }
}

const mapStateToProps = state => {
  const mapState = state.map.viewport.toJS();
  return { busData: getBusData(state), mapState };
};

export default connect(
  mapStateToProps,
  { ...actions, onChangeViewport }
)(MapContainer);
