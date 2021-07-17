import './data.js';
import {getAdsMarkup} from './get-ads-markup.js';
import {ADS_COUNT} from './util.js';
import {disableForms, enableForms} from './form.js';

getAdsMarkup(ADS_COUNT);

window.addEventListener('DOMContentLoaded', () => {
  disableForms();
  //Реализуем проверку работы активации форм по клику в зону логотипа.
  document.querySelector('.promo').addEventListener('click', enableForms);
});
