import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
      container: 'mijnkaart', // id van de div in index.html
        style: 'https://tiles.openfreemap.org/styles/liberty', // jouw gewenste stijl
          center: [5.6667, 51.967], // bijvoorbeeld Berlijn
            zoom: 9.5
            });