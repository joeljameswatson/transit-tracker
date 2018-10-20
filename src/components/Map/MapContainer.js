import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./Map";
import * as actions from "actions";
import { getBusData } from "reducers";

export class MapContainer extends Component {
  componentDidMount() {
    this.props.fetchBusData();
    // start loop
  }

  componentWillUnmount() {
    // stop loop
  }

  render() {
    return <Map busData={this.props.busData} />;
  }
}

const mapStateToProps = state => {
  return {
    busData: getBusData(state)
  };
};

export default connect(
  mapStateToProps,
  actions
)(MapContainer);
