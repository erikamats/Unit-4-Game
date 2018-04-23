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

var randomNumber =  Math.floor(Math.random() * (102)) + 19;
   $(".randomNumber").append(randomNumber);

var wins = 0;
var losses = 0;
var totalScore = 0;

$(".wins").append(wins);
$(".losses").append(losses);
$(".totalScore").append(totalScore);
$(".status").append(status);



// 2. Detect button choice (crystalImage)

var randomCrystal = Math.floor(Math.random() * (12)) + 1;

$("#crystalButtons").on("click", function() {
    console.log(randomCrystal);

    // var newCrystal1= $("#crystalButtons").
})




// 3. run function adds the value of the button1 clicked with button2 value to output current total score
// 4. Compare current total score to Computer Random Score.
                
        // if current total value  = computer random score,
        //                 change message to "YOU WIN!"
        //                 add 1 to Score board: Win
        //                 reset computer random
        //                     current total score 
        //                     Assing new random number 

        //                 if current total value > computer random score,
        //                 change message to "YOU LOST!"
        //                 add 1 to Score board: Losses
        //                 reset computer random
        //                     current total score 

        //         5. Nothing to do after - Refreshing page restarts game 

            


  