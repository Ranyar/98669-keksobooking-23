const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const isInRange = (value, rangeArray) => value >= rangeArray[0] && value < rangeArray[1];

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  let callCounter = 0;
  let resetCallCounterId;

  return () => {
    clearTimeout(timeoutId);
    clearTimeout(resetCallCounterId);
    resetCallCounterId = setTimeout(() => callCounter, timeoutDelay);
    if (callCounter === 0) {
      callback();
      callCounter++;
    } else {
      timeoutId = setTimeout(callback, timeoutDelay);
    }
  };
};

export {isEscEvent, isInRange, debounce};

