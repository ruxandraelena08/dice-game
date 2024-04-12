const randomNumber1 = Math.floor((Math.random() * 6 ) + 1);
const randomImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
const randomImageSource = "images/" + randomImage ;//images/dice1.png - images/dice6.png

//modificam atributele elem
const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource); //numele atributului si valoarea pe care vrem sa o modif

const randomNumber2 = Math.floor((Math.random() * 6 ) + 1);


const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else {
    document.querySelector("h1").innerHTML = "Draw!"
}