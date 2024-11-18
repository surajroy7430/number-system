const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  numbers.sort((a,b) => a - b)
  let n = numbers.length;
  let primeArray = []

  // Find Prime Numbers
  for(let i=0; i<n; i++) {
    let num = numbers[i];
    let isPrime = true

    if(num <= 1) {
      continue;
    }

    for(let j=2; j<num; j++) {
      if(num %j === 0) {
        isPrime = false
        break
      }
    }

    if(isPrime) {
      primeArray.push(num)
    }
  }
  console.log(primeArray);

  // Find Min, Max Numbers
  let min = primeArray[0]
  let max = primeArray[0]

  for(let i=0; i<primeArray.length; i++) {
    if(primeArray[i] < min) {
      min = primeArray[i]
    }
    if(primeArray[i] > max) {
      max = primeArray[i]
    }
  }

  console.log("min:", min);
  console.log("max:", max);
  
  // Find Sum of all Prime Numbers
  let sum = 0;
  for(let i=0; i<primeArray.length; i++) {
    sum += primeArray[i]
  }
  console.log("sum:", sum);
  