// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10
function min(number1 , number2){
    if (number1 < number2){
return number1;
    } else {
            return number2;  
    }
}
console.log(min(0, 10))
console.log(min(0, -10))
// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4
function calculateCircumference(radius){
    return 2*3.14* radius;
}

console.log(calculateCircumference(5))
// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
function searchString(string, ch) {
    let counted = 0;
    for (let i = 0; i < ch.length; i++) {
      if (ch[i] == string) {
        counted ++;
      }
    }
    return counted;
  }

console.log(searchString("s", "mississippi"))
console.log(searchString("q", "mississippi"))