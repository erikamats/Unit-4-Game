// Start with:  What are the "components"?
//      User:

//      Computer:

//      Score Board:
//          Message: You win or You Lost!

//          Wins:

//          Losses
// 
//      Random Number:
//  
//      Random Computer Number:
//      Buttons with Values/Function to add
//      Total Score

// 1. Create variables above and generate append each to website window
$(document).ready(function() {


    //computer's random number
var randomNumber =  Math.floor(Math.random() * (102)) + 19;
   $(".randomNumber").append(randomNumber);


   // assign random value to each button

    var crystal1= Math.floor(Math.random()*11+1);
    var crystal2= Math.floor(Math.random()*11+1);
    var crystal3= Math.floor(Math.random()*11+1);
    var crystal4= Math.floor(Math.random()*11+1);


    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    
    $(".wins").append(wins);
    $(".losses").append(losses);
    $(".totalScore").append(totalScore);
    $(".status").append(status);
    
 
//  Reseting Game

function reset() {
    randomNumber = Math.floor(Math.random() * (102)) + 19;
    $(".randomNumber").append(randomNumber);
    console.log("Guess this nubmer" + randomNumber);


    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);
    
    totalScore = 0;
    $(".totalScore").append(totalScore);
}

// function for when user wins (add to win)
function winner(){
    wins++;
    $(".wins").text("youwin");
    reset();
}
// function for when user loses (add to loses)

function loser(){
    losses++;
    $(".losses").append(message);
    reset();
}
    

// on click button function for crystals
$(".crystal1").on("click", function(){
  crystal1= Math.floor(Math.random() * (11)) + 1;
    console.log("Crystal1 Value: " + crystal1);
   
    totalScore = totalScore + crystal1;

    $(".totalScore").text(totalScore);

        if (totalScore === randomNumber ){
            winner();
            $(".message").text("You Win");
        
        } else if ( totalScore > randomNumber) {
            loser();
            $(".message").text("You Lose!");
            
        }
   
})


$(".crystal2").on("click", function(){
    crystal2= Math.floor(Math.random() * (11)) + 1;
      console.log("Crystal2 Value: " + crystal2);
     
      totalScore = totalScore + crystal2;
  
      $(".totalScore").text(totalScore);
  
          if (totalScore === randomNumber ){
              winner();
              $(".messages").append("You Win");
          
          } else if ( totalScore > randomNumber) {
              loser();
              $(".messages").append("You Lose!");
              
          }
     
  })

  $(".crystal3").on("click", function(){
    crystal1= Math.floor(Math.random() * (11)) + 1;
      console.log("Crystal3 Value: " + crystal3);
      totalScore = totalScore + crystal3;
  
      $(".totalScore").text(totalScore);
  
          if (totalScore === randomNumber ){
              winner();
              $(".messages").append("You Win");
          
          } else if ( totalScore > randomNumber) {
              loser();
              $(".messages").append("You Lose!");
              
          }
     
  })

  $(".crystal4").on("click", function(){
    crystal1= Math.floor(Math.random() * (11)) + 1;
      console.log("Crystal4 Value: " + crystal3);
     
      totalScore = totalScore + crystal4;
  
      $(".totalScore").text(totalScore);
  
          if (totalScore === randomNumber ){
              winner();
              $(".messages").append("You Win");
          
          } else if ( totalScore > randomNumber) {
              loser();
              $(".messages").append("You Lose!");
              
          }
     
  })



});



// 3. run function adds the value of the button1 clicked with button2 value to output current total score

