import {getAdsSet} from './data.js';

const getAdsMarkup = function (adsNumber) {
  const adData = getAdsSet(adsNumber);
  const adTemplate = document.querySelector('#card').content.querySelector('.popup');
  const typesMap = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
  };

  for (let i = 0; i < adsNumber; i++) {
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
    if (!adData[i].offer.price) {
      offerPrice.remove();
    } else {
      offerPrice.innerHTML = `
        ${adData[i].offer.price} <span>₽/ночь</span>
      `;
    }

    // Type
    if (!adData[i].offer.type) {
      offerType.remove();
    } else {
      offerType.textContent = typesMap[adData[i].offer.type];
    }

    // Rooms
    if (!adData[i].offer.rooms && !adData[i].offer.guests) {
      offerCapacity.remove();
    } else {
      let roomsCorrectText = 'комнат';
      if (adData[i].offer.rooms === 1) {
        roomsCorrectText = 'комната';
      }
      if (adData[i].offer.rooms > 1 && adData[i].offer.rooms < 5) {
        roomsCorrectText = 'комнаты';
      }
      offerCapacity.textContent = `${adData[i].offer.rooms} ${roomsCorrectText} для ${adData[i].offer.guests} гостей`;
    }

    // Checkin&checkout
    if (!adData[i].offer.checkin && !adData[i].offer.checkout) {
      offerCheckInOut.remove();
    } else {
      offerCheckInOut.textContent = `
        Заезд после ${adData[i].offer.checkin}, выезд до ${adData[i].offer.checkout};
      `;
    }

    // Features
    if (!adData[i].offer.features) {
      offerFeatures.remove();
    } else {
      const featuresAll = offerFeatures.querySelectorAll('.popup__feature');
      offerFeatures.innerHTML = '';
      const featuresAvailable = adData[i].offer.features.map((item) => `popup__feature--${item}`);
      featuresAvailable.forEach((featureAvailable) => {
        featuresAll.forEach((feature) => {
          if (feature.classList.contains(featureAvailable)) {
            offerFeatures.appendChild(feature);
          }
        });
      });
    }

    // Description
    if (!adData[i].offer.description) {
      offerDescription.remove();
    } else {
      offerDescription.textContent = adData[i].offer.description;
    }

    // Photo
    if (!adData[i].offer.photos) {
      offerPhotos.remove();
    } else {
      offerPhotos.innerHTML = '';
      adData[i].offer.photos.forEach((photo) => {
        offerPhotos.insertAdjacentHTML(
          'afterbegin',
          `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`,
        );
      });
    }
    return offerHtml;
  }
};
export {getAdsMarkup};
