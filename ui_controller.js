var scoreText = document.getElementById("score");

var incrementButton = document.getElementById("increment");
var answerText1 = document.getElementById("choice0");
                                          
var decrementButton = document.getElementById("decrement");
var answerText2 = document.getElementById("choice1");

var progressText = document.getElementById("progress");

var testPlayer = new Player("Jerry", 0);

//Set initial score to 0
scoreText.innerHTML = 0;

incrementButton.onclick = function() {
    testPlayer.incrementScore();
    scoreText.innerHTML = testPlayer.score;
}

decrementButton.onclick = function() {
    testPlayer.decrementScore();
    scoreText.innerHTML = testPlayer.score;
}
//Lazy area where I should be making a new JS file but just want to test some things


