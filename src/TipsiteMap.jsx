import React from 'react';
import ReactDOM from 'react-dom';

export default class TipsiteMap extends React.Component {

  renderChildren() {
    const {children} = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
     return React.cloneElement(c, {
       map: this.map,
       google: this.props.google
     });
   })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
      this.forceUpdate()
   }
  }

  // called after the component renders
  loadMap() {
    if (this.props && this.props.google) {
      // google is available\
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 8;
      let lat = -37.818539;
      let lng = 144.953135;

      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })

      this.map = new maps.Map(node, mapConfig);
    }

  //
  }

  render() {
    const style = {
      minWidth: '400px',
      minHeight: '400px'
    }
    return (
      <div className="row">
        <div className='col-xs-12 col-sm-12 col-md-12' style={style} ref='map'>
          {this.renderChildren()}
          Loading map...
        </div>
      </div>
    )
  }
}
