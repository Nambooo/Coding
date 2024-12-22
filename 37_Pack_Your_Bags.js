const planVacation = (destinationOne, destinationTwo, ...moreDestinations) => {
  return [destinationOne, destinationTwo, ...moreDestinations];
}

const destinationOne = planVacation("England");
const destinationTwo = planVacation("The Netherlands");

console.log(destinationOne);
console.log(destinationTwo);
