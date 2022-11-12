module.exports = function () {
    //declare a variable holding the largest no
    const max = 100;
    let arrays = [];
    //loop through the given number of times
    for (let i = 1; i <= max; i++) {
      //Check if the number is a multiple of both 3 & 5
      if (i % 3 === 0 && i % 5 === 0) {
        arrays.push("FizzBuzz");
      }
      //check if the number is a multiple of 3
      else if (i % 3 === 0) {
        arrays.push("Fizz");
      }//check if the number is a multiple of 5
      else if (i % 5 === 0) {
        arrays.push("Buzz");
      }//if not jus print the number
      else {
        arrays.push(i);
      }
    }
    return arrays;
  // write your code here
}
