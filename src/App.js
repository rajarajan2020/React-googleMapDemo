import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import './App.css';
import TipsiteFilterList from './TipsiteFilterList';
import TipsiteMapContainer from './TipsiteMapContainer';

export class TipsiteApp extends React.Component {

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <TipsiteMapContainer {...this.props} />
        <br />
        <TipsiteFilterList {...this.props}/> 
        {console.log('TESTING')}
        {console.log(this.props)}
        <br />
        Rangeing  
      </div>
  )};
}

function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    showingInfoWindow: state.get('showingInfoWindow'),
    activeMarker: state.get('activeMarker'),
    selectedTitle: state.get('selectedTitle'),
    gmapMarkers: state.get('gmapMarkers')
  };
}


export const TipsiteAppContainer = connect(mapStateToProps,actionCreators)(TipsiteApp);
