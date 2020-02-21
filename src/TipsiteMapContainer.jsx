import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import TipsiteMap from './TipsiteMap'
import {Marker} from './Marker'
import {InfoWindow} from './InfoWindow'

export class TipsiteMapContainer extends React.Component {
  render() {
    return (
      <div>
      <TipsiteMap google={this.props.google}>
        {this.props.markers.map(marker =>
          <Marker
            key={marker.get('title')}
            title={marker.get('title')}
            description={marker.get('description')}
            properties={marker.get('properties')}
            position={marker.get('position')}
            mapOn={marker.get('mapOn')}
            addMarker={this.props.addMarker}
            onMarkerClick={this.props.onMarkerClick}/>

        )}
        <InfoWindow {...this.props}
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}>
              <div>
                <h4>{this.props.selectedTitle}</h4>
              </div>
          </InfoWindow>
      </TipsiteMap>

      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(TipsiteMapContainer)
