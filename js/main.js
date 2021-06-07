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
