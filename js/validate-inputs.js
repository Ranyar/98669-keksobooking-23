const validateInputs = () => {
  const adForm = document.querySelector('.ad-form');
  const title = adForm.querySelector('#title');
  const timein = adForm.querySelector('#timein');
  const timeout = adForm.querySelector('#timeout');
  const type = adForm.querySelector('#type');
  const price = adForm.querySelector('#price');
  const minPrices = {
    'bungalow': 0,
    'flat': 1000,
    'hotel': 3000,
    'house': 5000,
    'palace': 10000,
  };

  const roomNumber = adForm.querySelector('#room_number');
  const capacity = adForm.querySelector('#capacity');
  const capacityOptions = {
    1: `
    <option value="1" selected>для 1 гостя</option>
    `,
    2: `
    <option value="1" selected>для 1 гостя</option>
    <option value="2">для 2 гостей</option>
    `,
    3: `
    <option value="1" selected>для 1 гостя</option>
    <option value="2">для 2 гостей</option>
    <option value="3">для 3 гостей</option>
    `,
    100: `
    <option value="0" selected>не для гостей</option>
    `,
  };
  const validateLength = (field) => {
    const length = field.value.length;
    const minLength = +field.getAttribute('minlength');
    if (field.validity.tooShort) {
      field.setCustomValidity(`Необходимо еще ${minLength - length} символов`);
    } else {
      field.setCustomValidity('');
    }

    field.reportValidity();
  };
  const validateNumber = (field, min, max) => {
    if (field.validity.rangeUnderflow) {
      field.setCustomValidity(`Минимальное значение для этого поля: ${min}`);
    } else if (field.validity.rangeOverflow) {
      field.setCustomValidity(`Максимальное значение для этого поля: ${max}`);
    } else {
      field.setCustomValidity('');
    }

    field.reportValidity();
  };
  const synchronizeTimeSelects = (mainField, dependentField) => {
    dependentField.value = mainField.value;
  };

  const synchronizeCapacitySelects = (mainField, dependentField) => {
    dependentField.innerHTML = capacityOptions[mainField.value];
  };

  const mapPriceWithType = (mapObject) => {
    price.setAttribute('min', mapObject[type.value]);
    price.setAttribute('placeholder', mapObject[type.value]);
  };

  mapPriceWithType(minPrices);
  synchronizeCapacitySelects(roomNumber, capacity);

  title.addEventListener('input', () => validateLength(title));
  timein.addEventListener('change', () => synchronizeTimeSelects(timein, timeout));
  timeout.addEventListener('change', () => synchronizeTimeSelects(timeout, timein));
  type.addEventListener('change', () => mapPriceWithType(minPrices));
  price.addEventListener('input', () => validateNumber(price, minPrices[type.value], price.getAttribute('max')));
  roomNumber.addEventListener('change', () => synchronizeCapacitySelects(roomNumber, capacity));
};

export {validateInputs};
