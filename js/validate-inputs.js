const validateInputs = () => {
  const MAX_PRICE = 1000000;
  const adForm = document.querySelector('.ad-form');
  const title = adForm.querySelector('#title');
  const timein = adForm.querySelector('#timein');
  const timeout = adForm.querySelector('#timeout');
  const type = adForm.querySelector('#type');
  const price = adForm.querySelector('#price');
  const roomNumber = adForm.querySelector('#room_number');
  const capacity = adForm.querySelector('#capacity');
  const minLength = 30;
  const minPrices = {
    'bungalow': 0,
    'flat': 1000,
    'hotel': 3000,
    'house': 5000,
    'palace': 10000,
  };
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

  const titleInputHandler = (evt) => {
    const length = evt.target.value.length;

    if (evt.target.validity.tooShort) {
      evt.target.setCustomValidity(`Необходимо еще ${minLength - length} символов`);
    } else {
      evt.target.setCustomValidity('');
    }

    evt.target.reportValidity();
  };

  title.addEventListener('input', titleInputHandler);


  const priceInputHandler = (evt) => {
    const min = minPrices[type.value];
    if (evt.target.validity.rangeUnderflow) {
      evt.target.setCustomValidity(`Минимальное значение для этого поля: ${min}`);
    } else if (evt.target.validity.rangeOverflow) {
      evt.target.setCustomValidity(`Максимальное значение для этого поля: ${MAX_PRICE}`);
    } else {
      evt.target.setCustomValidity('');
    }
    evt.target.reportValidity();
  };

  price.addEventListener('input', priceInputHandler);

  const timeoutHandler = () => {
    timeout.value = timein.value;
  };

  const timeinHandler = () => {
    timein.value = timeout.value;
  };

  timein.addEventListener('change', timeoutHandler);
  timeout.addEventListener('change', timeinHandler);

  const roomNumberCapacityHandler = (evt) => {
    capacity.innerHTML = capacityOptions[evt.target.value];
  };

  roomNumber.addEventListener('change', roomNumberCapacityHandler);

  const priceTypeHandler = (evt) => {
    price.setAttribute('min', minPrices[evt.target.value]);
    price.setAttribute('placeholder', minPrices[evt.target.value]);
  };

  type.addEventListener('change', priceTypeHandler);
};

const resetInputs = (form) => {
  const resetButton = form.querySelector('[type="reset"]');
  resetButton.click();
};

export {validateInputs, resetInputs};
