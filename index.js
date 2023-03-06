var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomNumber2 = Math.floor(Math.random() * 6) +1 ;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;



var image1 = document.querySelectorAll("img")[0] ;

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , randomImageSource);


var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2)

//if player1 wins
if (randomNumber1 > randomNumber2){
document.querySelector("h1").textContent = "Player 1 wins";
}
//if player 2 wins
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 wins";
}
//tie
else {
    document.querySelector("h1").textContent = "Match tied";
}

