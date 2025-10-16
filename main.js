import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";


const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
      container: 'mijnkaart', // id van de div in index.html
        style:  "https://tiles.openfreemap.org/styles/liberty",
          center: [ 5.66509 ,51.96857 ], 
            zoom:  13
            });

fetch("assets/wandeling.geojson")
.then(response => response.json())
.then(geojson => {
    map.on('load', () => {
        map.addSource('wandeling', {
            'type': 'geojson',
            'data': geojson
        });
        map.addLayer({
            'id': 'wandeling',
            'type': 'line',
            'source': 'wandeling',
            'layout': {},
            'paint': {
                'line-color': '#FF0000',
                'line-width': 4
            }
        });
    });
});