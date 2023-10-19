function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = randomizer(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomizer(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
export { randomizer, createRandomIdFromRangeGenerator };
