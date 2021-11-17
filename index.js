
var randomnum = Math.floor(Math.random()*6)+1 ;
var randomdice= "dice"+randomnum+".png";
var randomdicesrc="images/"+randomdice;
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomdicesrc);
var randomnum2 = Math.floor(Math.random()*6)+1 ;
var randomdice2= "dice"+randomnum2+".png";
var randomdicesrc2="images/"+randomdice2;
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomdicesrc2);
if (randomnum2>randomnum) {
    document.querySelector("h1").innerHTML="Player2 wins🏴";
}
else if (randomnum>randomnum2) {
    document.querySelector("h1").innerHTML="🏴Player1 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}

