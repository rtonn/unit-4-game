
$( document ).ready(function() {

//.........................................

//  random number at start of game
var Random=Math.floor(Math.random()*101+19)
$('#randomNumber').text(Random);

/// crystal hidden value random between 1-12
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

//.........................................

// win loss
var userTotal= 0; 
var wins= 0;
var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);


//  adds wins to userTotal
function congrats(){
    alert("You won!");
        wins++; 
        $('#numberWins').text(wins);
        reset();
    }

// add loss to userTotal
function loser(){
    alert ("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }
//...........................................

// set onclick for jewels
$('#image1').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
// set win loss conditions
        if (userTotal == Random){
          congrats();
        }
        else if ( userTotal > Random){
          loser();
        }   
  }) 
 
$('#image2').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//set win loss condition
        if (userTotal == Random){
          congrats();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  
$('#image3').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
// set win loss condition
          if (userTotal == Random){
          congrats();
        }
        else if ( userTotal > Random){
          loser();
        } 
  }) 

$('#image4').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
// set win loss condition    
          if (userTotal == Random){
          congrats();
        }
        else if ( userTotal > Random){
          loser();
        }
  });  



function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 


}); 