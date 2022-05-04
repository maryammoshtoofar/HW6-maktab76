// 2-Given an array of five values, calculate the average star rating, rounded to
// two decimal places. The array contains user votes per star, so the first element
// [0] contains the number of 1-star ratings and the last element [4], the
// number of 5-star ratings.
// Return the average score in [brackets], followed by a space and asterisks' * to represent
// the star rating, rounded to the nearest whole star.

function starRating(ratings) {
  const sum = ratings.reduce((acc, cur) => acc + cur);
  const rating = ratings
    .map((element, index) => element * (index + 1))
    .reduce((acc, cur) => acc + cur);

  return (rating / sum).toFixed(2);
}
console.log("********Question 2********");
console.log(starRating([55, 67, 98, 115, 61]));
console.log(starRating([0, 2, 0, 1, 23]));
console.log(starRating([16, 17, 23, 40, 45]));
