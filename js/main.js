import './data.js';
import {getAdsMarkup} from './get-ads-markup.js';
import {ADS_COUNT} from './util';

window.addEventListener('DOMContentLoaded', () => {
  getAdsMarkup(ADS_COUNT);
});
