const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}
fizzBuzz(500000)



// if (i % 3 === 0) {
//   console.log('Fizz')
// } else if (i % 5 === 0) {
//   console.log('Buzz')
// } else if (i % 3 === 0 && i % 5 === 0) {
//   console.log('FizzBuzz')
// }


// switch (i) {
//   case i % 3 === 0:
//     console.log('Fizz')
//     continue;
//   case i % 5 === 0:
//     console.log('Buzz')
//     continue;
//   case i % 3 === 0 && i % 5 === 0:
//     console.log('FizzBuzz')
//     continue;
// }