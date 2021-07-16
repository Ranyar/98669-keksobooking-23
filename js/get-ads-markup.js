import {getAdsSet} from './data.js';
import {ADS_COUNT} from './util.js';

const getAdsMarkup = function (ADS_COUNT) {
  const adData = getAdsSet(ADS_COUNT);
  const canvas = document.querySelector('#map-canvas');
  const adTemplate = document.querySelector('#card').content.querySelector('.popup');
  const typesMap = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
  };

  for (let i = 0; i < ADS_COUNT; i++) {
    const offerHtml = adTemplate.cloneNode(true);
    const offerTitle = offerHtml.querySelector('.popup__title');
    const offerAddress = offerHtml.querySelector('.popup__text--address');
    const offerPrice = offerHtml.querySelector('.popup__text--price');
    const offerType = offerHtml.querySelector('.popup__type');
    const offerCapacity = offerHtml.querySelector('.popup__text--capacity');
    const offerCheckInOut = offerHtml.querySelector('.popup__text--time');
    const offerFeatures = offerHtml.querySelector('.popup__features');
    const offerDescription = offerHtml.querySelector('.popup__description');
    const offerPhotos = offerHtml.querySelector('.popup__photos');

    // Avatar
    const authorAvatar = offerHtml.querySelector('.popup__avatar');
    authorAvatar.src = `${adData[i].author.avatar}`;

    // Title
    if (!adData[i].offer.title) {
      offerTitle.remove();
    } else {
      offerTitle.textContent = adData[i].offer.title;
    }

    // Address
    if (!adData[i].offer.address) {
      offerAddress.remove();
    } else {
      offerAddress.textContent = adData[i].offer.address;
    }

    // Price
    if (!adData[i].price) {
      offerPrice.remove();
    } else {
      offerPrice.innerHTML = `
        ${adData[i].price} <span>₽/ночь</span>
      `;
    }

    // Type
    if (!adData[i].type) {
      offerType.remove();
    } else {
      offerType.textContent = typesMap[adData[i].type];
    }

    // Rooms
    if (!adData[i].rooms && !adData[i].guests) {
      offerCapacity.remove();
    } else {
      let roomsCorrectText = 'комнат';
      if (adData[i].rooms === 1) {
        roomsCorrectText = 'комната';
      }
      if (adData[i].rooms > 1 && adData[i].rooms < 5) {
        roomsCorrectText = 'комнаты';
      }
      offerCapacity.textContent = `${adData[i].rooms} ${roomsCorrectText} для ${adData[i].guests} гостей`;
    }

    // Checkin&checkout
    if (!adData[i].checkin && !adData[i].checkout) {
      offerCheckInOut.remove();
    } else {
      offerCheckInOut.textContent = `
        Заезд после ${adData[i].checkin}, выезд до ${adData[i].checkout};
      `;
    }

    // Features
    if (!adData[i].features.length === 0) {
      offerFeatures.remove();
    } else {
      const featuresAll = offerFeatures.querySelectorAll('.popup__feature');
      offerFeatures.innerHTML = '';
      const featuresAvailable = adData[i].features.map((item) => `popup__feature--${item}`);
      featuresAvailable.forEach((featureAvailable) => {
        featuresAll.forEach((feature) => {
          if (feature.classList.contains(featureAvailable)) {
            offerFeatures.appendChild(feature);
          }
        });
      });
    }

    // Description
    if (!adData[i].description) {
      offerDescription.remove();
    } else {
      offerDescription.textContent = adData[i].description;
    }

    // Photo
    if (adData[i].photos.length === 0) {
      offerPhotos.remove();
    } else {
      offerPhotos.innerHTML = '';
      adData[i].photos.forEach((photo) => {
        offerPhotos.insertAdjacentHTML(
          'afterbegin',
          `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`,
        );
      });
    }
    canvas.appendChild(offerHtml);
  }
};
export {getAdsMarkup};
