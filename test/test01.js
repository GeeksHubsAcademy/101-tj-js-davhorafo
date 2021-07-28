function clasificaElementos(arrayValue) {

  numbers = []

  for(let i=0; i<arrayValue.length; i++){
      numbers.push(arrayValue[i])
  }

  console.log(numbers)
  console.log(numbers.length)

  positiveNumbers = []
  negativeNumbers = []
  zeroNumbers = []

  for(let i=0; i<numbers.length; i++){
    if(Math.sign(numbers[i]) == 1){
        positiveNumbers.push(numbers[i])
    }
    if(Math.sign(numbers[i]) == -1){
      negativeNumbers.push(numbers[i])
    }
    if(Math.sign(numbers[i]) == 0){
      zeroNumbers.push(numbers[i])
    }
  }

  console.log(positiveNumbers)

  let allNumberSized = [
    (positiveNumbers.length / numbers.length).toFixed(4),
    (negativeNumbers.length / numbers.length).toFixed(4),
    (zeroNumbers.length / numbers.length).toFixed(4),
  ];

  return allNumberSized;
};

console.log(clasificaElementos([0,0,1,-1,2]))

module.exports = clasificaElementos;
