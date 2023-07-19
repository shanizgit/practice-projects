"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//input field and guess button
document.querySelector(".guess").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input_number").value);
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage("⛔ No number!");
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage("YAY!...Correct Number");

    document.querySelector(".input_number").textContent = secretNumber;
    document.querySelector(".question").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#044419";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    //when wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High📈" : "Too Low📉");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("You lost the game💥");
    document.querySelector(".score").textContent = "0";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Gussing.....😜");
  document.querySelector(".score").textContent = score;
  document.querySelector(".question").textContent = "?";
  document.querySelector(".input_number").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(9, 4, 48);";
});
