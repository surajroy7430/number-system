const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

let n = numbers.length
// Even Numbers
for(let i=0; i<n; i++) {
    if(numbers[i] %2 === 0) {
        console.log("Even Number:", numbers[i])
    }
    else if(numbers[i] %2 !== 0) {
        // Odd Numbers
        console.log("Odd Number:", numbers[i])
    }
}
