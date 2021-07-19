const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFiltersFieldsets = adForm.querySelectorAll('fieldset');

const disablePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFiltersForm.classList.add('map__filters--disabled');
  adFormFieldsets.forEach((field) => {
    field.disabled = true;
  });
  mapFiltersFieldsets.forEach((field) => {
    field.disabled = true;
  });
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

export {disablePage, enablePage};
