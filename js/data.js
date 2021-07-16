import {ADS_COUNT,
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
  getRandomArrayLines} from './util.js';

function getAdsSet(adsNumber) {
  const adsSet = [];
  for (let i = 0; i < adsNumber; i++) {
    adsSet.push(
      {
        author: {
          avatar:`img/avatars/user${ getAvatarNumber(i) }.png`,
        },
        location: {
          lat: apartmentCoordinates.lat,
          lng: apartmentCoordinates.lng,
        },
        offer: {
          title: 'Тестовый заголовок',
          address: `${apartmentCoordinates.lat}, ${apartmentCoordinates.lng}`,
          price: getRandomInteger(PRICE_MIN, PRICE_MAX),
          type: TYPES[getRandomInteger(0, 4)],
          rooms: getRandomInteger(1, 5),
          guests: getRandomInteger(1, 8),
          checkin: CHECKINS[getRandomInteger(0, 2)],
          checkout: CHECKOUTS[getRandomInteger(0, 2)],
          features: getRandomArrayLines(FEATURES_LIST),
          description: 'Тестовое описание',
          photos: getRandomArrayLines(PHOTOS_LIST),
        },
      },
    );
  }
  //console.log(adsSet);
}

export {getAdsSet};
