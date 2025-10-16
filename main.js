import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";


const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
      container: 'mijnkaart', // id van de div in index.html
        style: '/assets/style.json',
          center: [ 5.66509 ,51.96857 ], 
            zoom:  13
            });