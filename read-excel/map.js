const urlmap = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
var mymap = L.map('mapid').setView([51.505, -0.09], 15);

let ubiccaciones = L.marker([51.5, -0.09]).addTo(mymap);

L.tileLayer(urlmap,
  {
    maxZoom: 18
  }
).addTo(mymap);

