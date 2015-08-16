var scoreText = $("#score");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var progressText = document.getElementById("progress");
var testPlayer = new Player("Jerry", 0);
var testGame = new Game();
var numberOfPlayers = 1;

//Set initial score to 0
//scoreText.innerHTML = 0;
$(document).ready(function() {
    scoreText.text(0);
    //$("#player-name").css("width", "50%");
    $("#menu-toggle").hide();
    $("#number-players-selector").hide();
    $("#close-menu").hide();
    
    $("#players").append("<br /><button id='add-player-button'>Add</button>");
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

var addNewPlayerDiv = function() {
    console.log("addNewPlayerDiv() triggered...");
    $("#players").append('<input type="text" id="player-name" class="player-name-field" placeholder="Who\'s playing?  Click to enter your name!"/>'
                + '<h2 id="score" class="headline-secondary--grouped" style = "margin-bottom: 10px"></h2>'
                + '<div class = "buttons-group">'
                + '<button id="decrement" class="btn--default">- 1</button>'
                + '<button id="increment" class="btn--default">+ 1</button>'
                + '</div>');
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

$("#test-button").click(function() {
    addNewPlayerDiv();
});

$("#add-player-button").click(function() {
    addNewPlayerDiv();
});

$("#player-name").focusout(function() {
    $(this).css("color", "grey");
    $(this).toggleClass("edit");
    $(this).attr("placeholder", "");
});

$("#player-name").focusin(function() {
    $(this).css("color", "black");
    $(this).toggleClass("edit");
});