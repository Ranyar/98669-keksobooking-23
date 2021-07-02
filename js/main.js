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

getRandomInteger(0, 100);
getRandomFloatInteger(0, 100, 2);

function getAvatarNumber () {
  let randomInteger = getRandomInteger(0, 10);
  if (`${randomInteger}`.length < 2) {
    randomInteger = '0' + randomInteger;
  }
  return randomInteger;
}

const avatarNumber = getAvatarNumber();

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
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', +
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function getRandomArrayLines (array)  {
  return array.slice(0, getRandomInteger(0, array.length - 1));
}

const apartmentCoordinates = {
  lat: getRandomFloatInteger(35.65000, 35.70000, 5),
  lng: getRandomFloatInteger(139.70000, 139.80000, 5),
};

const ADS_COUNT = 10;

function createAds() {
  return {
    author: {
      avatar:`img/avatars/user${  avatarNumber  }.png`,
    },
    location: {
      lat: apartmentCoordinates.lat,
      lng: apartmentCoordinates.lng,
    },
    offer: {
      title: 'Тестовый заголовок',
      address: `${apartmentCoordinates.lat}, ${apartmentCoordinates.lng}`,
      price: getRandomInteger(100, 100000),
      type: TYPES[getRandomInteger(0, 4)],
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 8),
      checkin: CHECKINS[getRandomInteger(0, 2)],
      checkout: CHECKOUTS[getRandomInteger(0, 2)],
      features: getRandomArrayLines(FEATURES_LIST),
      description: 'Тестовое описание',
      photos: getRandomArrayLines(PHOTOS_LIST),
    },
  };
}

const adsSet = new Array(ADS_COUNT).fill(null).map(() => createAds());

//console.log(adsSet);
