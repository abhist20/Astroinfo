let myMap;
map =  L.map( 'map', {
    center: [56.34173238798219, -2.8110574965308235],
    minZoom: 2,
    zoom: 10
});
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    var location = e.latlng
    L.marker(location).addTo(map)
    L.circle(location, radius).addTo(map);
    document.getElementById("loc").innerHTML = location;
 }

 function onLocationError(e) {
    alert(e.message);
 }

function getLocationLeaflet() {
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
    
    map.locate({setView: true, maxZoom: 16});
 }
