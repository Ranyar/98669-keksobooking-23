const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFiltersFieldsets = adForm.querySelectorAll('fieldset');
const filtersForm = document.querySelector('.map__filters');

const disablePage = () => {
  adForm.classList.add('ad-form--disabled');
  filtersForm.classList.add('map__filters--disabled');
};

const enablePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFiltersForm.classList.remove('map__filters--disabled');
  adFormFieldsets.forEach((field) => {
    field.disabled = false;
  });
  mapFiltersFieldsets.forEach((field) => {
    field.disabled = false;
  });
};

const enableFilters = () => {
  filtersForm.classList.remove('map__filters--disabled');
};

export {disablePage, enablePage, enableFilters};
