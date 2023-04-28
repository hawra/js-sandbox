const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  console.log(lat, 'RSH 1'); // RSH
  const lng = pos.coords.longitude;
  console.log(lng, 'RSH 2'); // RSH

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 15); // Here is where we move the map to plum street
  // Plum St latitude : 32.7302995 ; longitude : -117.2311412
  // This actually appears to be next door 3414 Jarvis, not 1604 Plim St.
  // Our computer room: Lat : 32.73012, Long: -117.23091

  marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
});
