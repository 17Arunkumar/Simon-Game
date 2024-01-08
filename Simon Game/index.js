var gamepattern=[];

var userClickedPattern=[];

var buttonColor=["green","red","yellow","blue"];

var level=0;

var started=false;

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
  
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

  });

  function nextsequence(){

    userClickedPattern=[];
    
    var randomNumber =Math.floor(Math.random()*4);
    
    var choose=buttonColor[randomNumber];
 
    gamepattern.push(choose);

    $("#" + choose).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(choose);

    level++;

    $("h1").text(" Level  " + level);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
  }

  $(document).on("keypress",function(){
    if (!started) {n
    nextsequence();
    started=true;
    }
  });

  function checkAnswer(currentLevel){
  if(gamepattern[currentLevel]==userClickedPattern[currentLevel])
   {
   if(gamepattern.length==userClickedPattern.length)
   {
    setTimeout(function(){
      nextsequence();
    },1000);
    }
   }
   else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
     setTimeout(function(){
      $("body").removeClass("game-over");
     },100);
     
     $("h1").text("Game Over, Press Any Key to Restart");
    
  }
  }
