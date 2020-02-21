import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer'
import {TipsiteAppContainer} from './App';
import './index.css';


const store = createStore(reducer)

function get_tipsite(features) {
  let tipsites = []
  features.forEach(feature => {
    tipsites.push({
      'title' : feature['properties']['title'],
      'description' : feature['properties']['description'],
      'position' : [feature['geometry']['coordinates'][1],
      feature['geometry']['coordinates'][0]],
      'properties': feature['properties'],
      'image': feature['properties']['image'],
      'url': feature['properties']['url'],
      'mapOn': true

    })
  });
  return tipsites
}

let features = [{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    //"coordinates": [-122.166149, 42.865508]
    "coordinates": [144.963058, -37.813629]    
  },
  "properties": {
    "clean fill": true,
    "construction": true,
    "clean concrete": true,
    "dirty concrete": true,
    "green waste": false,    
    "description": "Flush toilet, Shower",
    "title": "Tip1",
    "image": "mazama.jpg",
    "url": "http://www.craterlakelodges.com/lodging/mazama-village-campground/",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    //"coordinates": [-122.037881, 42.879145]
    "coordinates": [145.056122, -37.976978]    
  },
  "properties": {
    "clean fill": true,
    "construction": false,
    "clean concrete": false,
    "dirty concrete":true,
    "green waste": true,    
    "description": "Flush toilet",
    "title": "Tip 2",
    "url": "http://www.nps.gov/crla/planyourvisit/campgrounds.htm",
    "image": "lostcreek.jpg",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [144.056122, -37.976978]
  },
  "properties": {
    "clean fill": false,
    "construction": false,
    "clean concrete": true,
    "dirty concrete": false,
    "green waste": true,    
    "description": "Tip 3",
    "title": "Huckleberry Mountain",
    "url": "https://www.fs.usda.gov/recarea/rogue-siskiyou/recreation/ohv/recarea/?recid=69764&actid=29",
    "image": "huckleberry.jpg",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [145.056122, -37.976978]
  },
  "properties": {
    "clean fill": false,
    "construction": false,
    "clean concrete": true,
    "dirty concrete": false,
    "green waste": true,
    "description": "Vault toilet",
    "title": "Tip 4",
    "url": "https://www.fs.usda.gov/recarea/rogue-siskiyou/null/recarea/?recid=69828&actid=29",
    "image": "naturalbridge.jpg",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [145.056122, -36.976978]
  },
  "properties": {
    "clean fill": false,
    "construction": false,
    "clean concrete": true,
    "dirty concrete": true,
    "green waste": false,    
    "description": "Tip 5",
    "title": "Scott Creek",
    "url": "https://www.fs.usda.gov/recarea/fremont-winema/recreation/recarea/?recid=59719&actid=31",
    "image": "scottcreek.jpg",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [145.056122, -37.713629]
  },
  "properties": {
    "clean fill": false,
    "construction": false,
    "clean concrete": true,
    "dirty concrete": true,
    "green waste": true,    
    "description": "Tip 6",
    "title": "Union Creek",
    "url": "https://www.fs.usda.gov/recarea/rogue-siskiyou/recarea/?recid=69922",
    "image": "unioncreek.jpg",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [145.056122, -38.713629]
  },
  "properties": {
    "clean fill": false,
    "construction": false,
    "clean concrete": false,
    "dirty concrete": true,
    "green waste": false,    
    "description": "",
    "title": "Tip 7",
    "url": "https://www.fs.usda.gov/recarea/rogue-siskiyou/null/recarea/?recid=69720&actid=29",
    "image": "farewellbend.jpg",
    "marker-size": "small"
  }
}]

set_state(get_tipsite(features))

function set_state(tipsites) {
  store.dispatch ({
  type: 'SET_STATE',
  state: {
    filters: [
      {id: 'construction', inuse: false },
      {id: 'clean fill', inuse: true },
      {id: 'clean concrete', inuse: false },
      {id: 'dirty concrete', inuse: false },
      {id: 'green waste', inuse: false }      
    ],
    markers: tipsites,
    gmapMarkers: [],
    showingInfoWindow: "false",
    activeMarker: null,
    selectedTitle: ""
  }
 })
}

ReactDOM.render(
  <Provider store={store}>
  <TipsiteAppContainer />
</Provider>,
  document.getElementById('root')
);
