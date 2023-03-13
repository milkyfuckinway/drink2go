const mapContainer = document.querySelector('#map');
const mapBackground = mapContainer.querySelector('.map__background');

const LAT = 59.96836;
const LNG = 30.31758;
const ZOOM = 25;

const map = L.map(mapContainer, {
  zoomControl: false,
  attributionControl: false,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

const mainMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    icon: pinIcon,
    alt: 'Наше местоположение',
  }
).addTo(map);

map.setView(
  {
    lat: LAT,
    lng: LNG,
  },
  ZOOM
);

mapBackground.remove();
