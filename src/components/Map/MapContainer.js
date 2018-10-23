import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeViewport } from "redux-map-gl";
import { getBusData, getMap } from "reducers";
import Map from "./Map";
import * as actions from "actions";

export class MapContainer extends Component {
  setIntervalID = null;

  componentDidMount() {
    this.props.fetchBusData();
    const refreshRate = process.env.REACT_APP_REFRESH_RATE || 5000;
    this.setIntervalID = setInterval(
      () => this.props.fetchBusData(),
      refreshRate
    );
  }

  componentWillUnmount() {
    clearInterval(this.setIntervalID);
  }

  render() {
    const mapState = this.props.map.viewport.toJS();
    return (
      <Map
        busData={this.props.busData}
        mapState={mapState}
        onChangeViewport={this.props.onChangeViewport}
      />
    );
  }
}

const mapStateToProps = state => {
  return { busData: getBusData(state), map: getMap(state) };
};

export default connect(
  mapStateToProps,
  { ...actions, onChangeViewport }
)(MapContainer);
