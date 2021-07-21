import {replaceSubmitHandler} from './forms.js';
import {disablePage} from './page-activity-switcher.js';
import {loadMap} from './map-leaflet.js';
import {validateInputs} from './validate-inputs.js';
import {replaceResetHandler, showImagePreview} from './forms.js';
import {setFilterChangeHandler} from './filters.js';

disablePage();
loadMap();
validateInputs();
replaceSubmitHandler('.ad-form');
replaceResetHandler('.ad-form');
setFilterChangeHandler();
showImagePreview('#avatar', '.ad-form-header__preview', 'Аватар пользователя', 70);
showImagePreview('#images', '.ad-form__photo', 'Фото помещения', 70);

