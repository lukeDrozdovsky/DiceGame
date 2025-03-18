var button = document.querySelector("button");
button.addEventListener("click", buttonClick);

function buttonClick() {
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

const images = [
    './images/dice1.svg',
    './images/dice2.svg',
    './images/dice3.svg',
    './images/dice4.svg',
    './images/dice5.svg',
    './images/dice6.svg',
  ];
  
var dices = document.querySelectorAll("img");

dices[0].setAttribute("src", images[randomNumber1]);
dices[1].setAttribute("src", images[randomNumber2]);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩 Player 1 wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}

}


