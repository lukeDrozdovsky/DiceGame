var button = document.querySelector("button");
button.addEventListener("click", buttonClick);

function buttonClick() {
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

const images = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
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


