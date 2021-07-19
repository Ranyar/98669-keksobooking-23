import './data.js';
import {getAdsMarkup} from './get-ads-markup.js';
import {ADS_COUNT} from './util.js';
import {disablePage, enablePage} from './page-activity-switcher.js';

getAdsMarkup(ADS_COUNT);

disablePage();
//Реализуем проверку работы активации форм по клику в зону логотипа.
document.querySelector('.promo').addEventListener('click', enablePage);

