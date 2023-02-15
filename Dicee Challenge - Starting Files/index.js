var leftrandomNumber1 =Math.floor(Math.random()*6);


if (leftrandomNumber1===0){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
     }
if(leftrandomNumber1===1){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
 }
 if(leftrandomNumber1===2){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
if(leftrandomNumber1===3){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
 }
if(leftrandomNumber1===4){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
};
if(leftrandomNumber1===5){
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
 }

 var rightrandomNumber1 =Math.floor(Math.random()*6);

 if (rightrandomNumber1===0){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
 }
if(rightrandomNumber1===1){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if(rightrandomNumber1===2){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if(rightrandomNumber1===3){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if(rightrandomNumber1===4){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
if(rightrandomNumber1===5){
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if (leftrandomNumber1>rightrandomNumber1){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
if (leftrandomNumber1<rightrandomNumber1){
    document.querySelector("h1").innerHTML ="Player 2 wins";
}
if (leftrandomNumber1==rightrandomNumber1){
    document.querySelector("h1").innerHTML="Draws!";
}






