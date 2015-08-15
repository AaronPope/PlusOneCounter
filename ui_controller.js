var scoreText = $("#score");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var progressText = document.getElementById("progress");
var testPlayer = new Player("Jerry", 0);
var testGame = new Game();

//Set initial score to 0
//scoreText.innerHTML = 0;
$(document).ready(function() {
    scoreText.text(0);
    $("#player-name").css("width", "50%");
    $("#menu-toggle").hide();
    $("#number-players-selector").hide();
    $("#close-menu").hide();
    
    $("#quiz").append("<br /><button id='add-player-button'>Add</button>");
    $("#quiz").append("<h1>Score Tracker 2</h1>"
                        + "<input placeholder='Player 2' />"
                        + "<h2 id='p2-score'></h2>");
});

$("#add-player-button").on("click", function() {  
    alert("test");
});

incrementButton.onclick = function() {
    testPlayer.incrementScore();
    scoreText.text(testPlayer.score);
}

decrementButton.onclick = function() {
    if(testPlayer.score === 0 && !testGame.allowNegatives) { 
        alert("Nope!");
    }
    else {
        testPlayer.decrementScore();
        scoreText.text(testPlayer.score);
    }
}

$("footer").mouseenter(function() {
    $("#menu-toggle").toggle();
}).mouseleave(function() {
    $("#menu-toggle").toggle();
});

$("#menu-toggle").click(function() {
    toggleMenu();
});

$("#close-menu").click(function() {
    toggleMenu();
});

function toggleMenu() {
    $("#close-menu").slideToggle();
    $("#number-players-selector").slideToggle();
    $("#menu-toggle").toggle();
}
//Lazy area where I should be making a new JS file but just want to test some things

