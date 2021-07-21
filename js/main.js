import './data.js';
import {getAdsMarkup} from './get-ads-markup.js';
import {ADS_COUNT} from './util.js';
import {disablePage} from './page-activity-switcher.js';
import './validate-inputs.js';
import  { loadMap, generateSimilarAds } from './map-leaflet.js';

getAdsMarkup(ADS_COUNT);

window.addEventListener('DOMContentLoaded', () => {

  loadMap();
  generateSimilarAds(5);
});
