const getAdsMarkup = function (adItem) {
  const adTemplate = document.querySelector('#card').content.querySelector('.popup');
  const typesMap = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
  };

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
  authorAvatar.src = `${adItem.author.avatar}`;

  // Title
  if (!adItem.offer.title) {
    offerTitle.remove();
  } else {
    offerTitle.textContent = adItem.offer.title;
  }

  // Address
  if (!adItem.offer.address) {
    offerAddress.remove();
  } else {
    offerAddress.textContent = adItem.offer.address;
  }

  // Price
  if (!adItem.offer.price) {
    offerPrice.remove();
  } else {
    offerPrice.textContent = `
        ${adItem.offer.price} ₽/ночь
      `;
  }

  // Type
  if (!adItem.offer.type) {
    offerType.remove();
  } else {
    offerType.textContent = typesMap[adItem.offer.type];
  }

  // Rooms
  if (!adItem.offer.rooms && !adItem.offer.guests) {
    offerCapacity.remove();
  } else {
    let roomsCorrectText = 'комнат';
    if (adItem.offer.rooms === 1) {
      roomsCorrectText = 'комната';
    }
    if (adItem.offer.rooms > 1 && adItem.offer.rooms < 5) {
      roomsCorrectText = 'комнаты';
    }
    offerCapacity.textContent = `${adItem.offer.rooms} ${roomsCorrectText} для ${adItem.offer.guests} гостей`;
  }

  // Checkin&checkout
  if (!adItem.offer.checkin && !adItem.offer.checkout) {
    offerCheckInOut.remove();
  } else {
    offerCheckInOut.textContent = `
        Заезд после ${adItem.offer.checkin}, выезд до ${adItem.offer.checkout};
      `;
  }

  // Features
  if (!adItem.offer.features) {
    offerFeatures.remove();
  } else {
    const featuresAll = offerFeatures.querySelectorAll('.popup__feature');
    offerFeatures.innerHTML = '';
    const featuresAvailable = adItem.offer.features.map((item) => `popup__feature--${item}`);
    featuresAvailable.forEach((featureAvailable) => {
      featuresAll.forEach((feature) => {
        if (feature.classList.contains(featureAvailable)) {
          offerFeatures.appendChild(feature);
        }
      });
    });
  }

  // Description
  if (!adItem.offer.description) {
    offerDescription.remove();
  } else {
    offerDescription.textContent = adItem.offer.description;
  }

  // Photo
  if (!adItem.offer.photos) {
    offerPhotos.remove();
  } else {
    offerPhotos.innerHTML = '';
    adItem.offer.photos.forEach((photo) => {
      offerPhotos.insertAdjacentHTML(
        'afterbegin',
        `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`,
      );
    });
  }
  return offerHtml;
};
export {getAdsMarkup};
