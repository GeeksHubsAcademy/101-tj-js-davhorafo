function clasificaElementos(arrayValue) {
  allNumbers = [];
  positiveNumbers = [];
  negativeNumbers = [];
  zeroNumbers = [];

  for (let i = 0; i < arrayValue.length; i++) {
    allNumbers.push(arrayValue[i]);
  }

  for (let i = 0; i < allNumbers.length; i++) {
    const whichIsYourSign = Math.sign(allNumbers[i]);
    if (whichIsYourSign == 1) {
      positiveNumbers.push(allNumbers[i]);
    }
    if (whichIsYourSign == -1) {
      negativeNumbers.push(allNumbers[i]);
    }
    if (whichIsYourSign == 0) {
      zeroNumbers.push(allNumbers[i]);
    }
  }

  let allNumbersMeasured = [
    (positiveNumbers.length / allNumbers.length).toFixed(4),
    (negativeNumbers.length / allNumbers.length).toFixed(4),
    (zeroNumbers.length / allNumbers.length).toFixed(4),
  ];

  return allNumbersMeasured;
}

module.exports = clasificaElementos;
