//Rock = 0
//Paper = 1
//Scissors = 2 

Rock = 0;

Paper = 1;

Scissors = 2;

const player = 2

const computer = Math.floor(Math.random() *3) 

if (computer === player) {
  console.log("No one won!");
}
else if (computer < player) {
  console.log("The player won!");
}
else {
  console.log("The computer won!");
}
