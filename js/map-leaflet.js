import {enablePage, enableFilters} from './page-activity-switcher.js';
import {getAdsMarkup} from './get-ads-markup.js';
import {getData, showLoadFailMessage, cachedData} from './get-data.js';
import {filterData} from './filters.js';
import {FRAME_CENTER_COORDS, MAIN_MARKER_SIZE, SECONDARY_MARKER_SIZE, ADS_NUMBER_TO_SHOW} from './settings.js';

const map = L.map('map-canvas');
const markersLayer = L.layerGroup().addTo(map);
const addressInput = document.querySelector('#address');

const mainMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: MAIN_MARKER_SIZE,
  iconAnchor: [MAIN_MARKER_SIZE[0] / 2, MAIN_MARKER_SIZE[1]],
  shadowUrl: 'leaflet/images/marker-shadow.png',
  shadowSize: [MAIN_MARKER_SIZE[0] * 2, MAIN_MARKER_SIZE[1] * 2],
  shadowAnchor: [MAIN_MARKER_SIZE[0] / 2, MAIN_MARKER_SIZE[1] * 2],
});
const mainMarker = L.marker(
  FRAME_CENTER_COORDS,
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

const secondaryMarkerIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: SECONDARY_MARKER_SIZE,
  iconAnchor: [SECONDARY_MARKER_SIZE[0] / 2, SECONDARY_MARKER_SIZE[1]],
  shadowUrl: 'leaflet/images/marker-shadow.png',
  shadowSize: [SECONDARY_MARKER_SIZE[0] * 2, SECONDARY_MARKER_SIZE[1] * 2],
  shadowAnchor: [SECONDARY_MARKER_SIZE[0] / 2, SECONDARY_MARKER_SIZE[1] * 2],
});

const generateSimilarAds = (numberOfAds) => {
  const adsData = getData(showLoadFailMessage);
  adsData
    .then((dataArray) => dataArray.slice(0, numberOfAds))
    .then((dataArray) => {
      dataArray.forEach((dataItem) => {
        const adHTML = getAdsMarkup(dataItem);
        const secondaryMarkerCoords = dataItem.location;
        const secondaryMarker = L.marker(
          secondaryMarkerCoords,
          {
            icon: secondaryMarkerIcon,
          },
        );
        secondaryMarker.addTo(markersLayer).bindPopup(adHTML);
      });
    })
    .then(() => enableFilters());
};

const renderAdsFromCache = (numberOfAds) => {
  markersLayer.clearLayers();
  const adsData = filterData(cachedData, numberOfAds);
  adsData.forEach((dataItem) => {
    const adHTML = getAdsMarkup(dataItem);
    const secondaryMarkerCoords = dataItem.location;
    const secondaryMarker = L.marker(
      secondaryMarkerCoords,
      {
        icon: secondaryMarkerIcon,
      },
    );
    secondaryMarker.addTo(markersLayer).bindPopup(adHTML);
  });
};

const loadMap = () => {
  map.on('load', enablePage)
    .setView(FRAME_CENTER_COORDS, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker.addTo(map);

  addressInput.value = `
  ${FRAME_CENTER_COORDS.lat.toFixed(5)}, ${FRAME_CENTER_COORDS.lng.toFixed(5)}
  `;

  mainMarker.on('moveend', (evt) => {
    const latLng = evt.target.getLatLng();
    const latitude = latLng.lat.toFixed(5);
    const longitude = latLng.lng.toFixed(5);
    addressInput.value = `${latitude}, ${longitude}`;
  });

  generateSimilarAds(ADS_NUMBER_TO_SHOW);
};

const resetMap = () => {
  map.setView(FRAME_CENTER_COORDS, 13);
  mainMarker.setLatLng(FRAME_CENTER_COORDS);
  addressInput.value = `${FRAME_CENTER_COORDS.lat.toFixed(5)}, ${FRAME_CENTER_COORDS.lng.toFixed(5)}`;
  renderAdsFromCache(ADS_NUMBER_TO_SHOW);
};

export { loadMap, resetMap, renderAdsFromCache };
