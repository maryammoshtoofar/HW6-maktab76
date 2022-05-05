// 1-Create a function that takes in an array and returns an array of the accumulating
// sum
// accumulatingArray([1,2,3,4]) =>[1,3,6,10]

function accumulatingArray(array) {
  let first = 0;
  console.log("hi")
  return array.map((element) => (first += element));
}
console.log("********Question 1********");
console.log(accumulatingArray([1, 2, 3, 4])); //[1, 3, 6, 10]
console.log(accumulatingArray([1, 0, 1, 0, 1])); //[1, 1, 2, 2, 3]
console.log(accumulatingArray([])); //[]
