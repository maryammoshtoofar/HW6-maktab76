// 4- Create a function to build a Clock in 12 hours(with AM & PM ) and show The current
// Time in the console.

function consoleClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours < 12) return `${hours}:${minutes} A.M`;
  else return `${hours - 12}:${minutes} P.M`;
}
console.log("********Question 4********");
console.log(consoleClock());
