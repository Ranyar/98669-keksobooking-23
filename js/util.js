const ADS_COUNT = 10;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const PRICE_MIN = 100;
const PRICE_MAX = 100000;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const apartmentCoordinates = {
  lat: getRandomFloatInteger(LAT_MIN, LAT_MAX, 5),
  lng: getRandomFloatInteger(LNG_MIN, LNG_MAX, 5),
};

function getRandomInteger(min, max) {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return 'Ошибка, число не должно быть отрицательно. Максимальное число не должно быть равно минимальному.';
}

function getRandomFloatInteger(min, max, fix) {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return Number(rand.toFixed(fix));
  }
  return 'Ошибка, число не должно быть отрицательно. Максимальное число не должно быть равно минимальному.';
}

function getAvatarNumber (count) {
  if (count < 9) {
    return `0${  count + 1}`;
  } else {
    return count + 1;
  }
}

function getRandomArrayLines (array)  {
  return array.slice(0, getRandomInteger(1, array.length - 1));
}

export {ADS_COUNT,
  PRICE_MIN,
  PRICE_MAX,
  TYPES,
  CHECKINS,
  CHECKOUTS,
  FEATURES_LIST,
  PHOTOS_LIST,
  apartmentCoordinates,
  getRandomInteger,
  getAvatarNumber,
  getRandomArrayLines};
