var image=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var randomnum1=Math.random()*6;
var randomnum2=Math.random()*6;
var randomnumber1=Math.floor(randomnum1);
var randomnumber2=Math.floor(randomnum2);
var image1=image[randomnumber1];
var image2=image[randomnumber2];

img1.src=image1;
img2.src=image2;
if(randomnumber1>randomnumber2)
{
document.querySelector("h1").innerHTML ="🚩PLAYER1 WINS";
}
else if(randomnumber2>randomnumber1)
{
document.querySelector("h1").innerHTML ="🚩PLAYER2 WINS";
}
else
{
document.querySelector("h1").innerHTML ="🚩ITS A DRAW";
}

