document.getElementsByTagName("h1")[0].innerHTML = "Refresh Me";

function rollDice(){
  var images = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
  var player1Dice = Math.floor(Math.random()*6)+1;
  var player2Dice = Math.floor(Math.random()*6)+1;

  document.querySelector(".img1").src = "images/"+images[player1Dice-1];
  document.querySelector(".img2").src = "images/"+images[player2Dice-1];

  if(player1Dice === player2Dice){
    document.getElementsByTagName("h1")[0].innerHTML = "Both Wins";
  }
  else if(player1Dice>player2Dice){
    document.getElementsByTagName("h1")[0].innerHTML = "Player1 Wins";
  }
  else{
    document.getElementsByTagName("h1")[0].innerHTML = "Player2 Wins";
  }

}

// random 0.000001  - 0.9999999999999999999999999999
//    0.000000   -  5.9999999999999999999999999999

// 1.0
