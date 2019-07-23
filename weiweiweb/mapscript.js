// import Map from 'ol/Map'
// import View from 'ol/view.js'
// import {fromLonLat} from 'ol/proj.js'
// import TileLater from 'ol/layer/Tile.js'


//creat a map
function init(){
  var view = new ol.View({
    center: ol.proj.fromLonLat([41.01224, 28.976018]),
    zoom: 6
  });
  var map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      loadTilesWhileAnimating: true,
      view: view
  });
}

window.onload = init;
