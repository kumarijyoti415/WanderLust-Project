mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .addTo(map);
