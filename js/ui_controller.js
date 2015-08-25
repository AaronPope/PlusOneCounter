var scoreText = $("#score");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var progressText = document.getElementById("progress");
var testPlayer = new Player("Jerry", 0);
var testGame = new Game();
var numberOfPlayers = 2;
var defaultPlayerNameText = "Who's playing? Click to enter your name.";

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

//$("#add-player-button").on("click", function() {  
//    alert("test");
//});

//incrementButton.onclick = function() {
//    testPlayer.incrementScore();
//    scoreText.text(testPlayer.score);
//}
//
//decrementButton.onclick = function() {
//    if(testPlayer.score === 0 && !testGame.allowNegatives) { 
//        alert("Nope!");
//    }
//    else {
//        testPlayer.decrementScore();
//        scoreText.text(testPlayer.score);
//    }
//}

var addNewPlayerDiv = function() {
    ++numberOfPlayers;
    console.log("addNewPlayerDiv() triggered...");
    $("#players").append('<input type="text" id="player-' + numberOfPlayers + '-name" class="player-name-field" placeholder="Who\'s playing?  Click to enter your name!"/>'
                + '<h2 id="score" class="headline-secondary--grouped" style = "margin-bottom: 10px"></h2>'
                + '<div class = "buttons-group">'
                +   '<button class="add-2-train btn--default">2</button>'
                +   '<button class="add-3-train btn--default">3</button>'
                +   '<button class="add-4-train btn--default">4</button>'
                +   '<button class="add-5-train btn--default">5</button>'
                +   '<button class="add-6-train btn--default">6</button>'
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

$("#add-2-train").click(function() {
    console.log("add-2-train clicked");
   testPlayer.incrementScore(2);
    updateScore();
});

var updateScore = function() {
    console.log("updateScore() triggered");
    scoreText.text(testPlayer.score);
};

//Lazy area where I should be making a new JS file but just want to test some things

$("#test-button").click(function() {
    addNewPlayerDiv();
});

$("#add-player-div").click(function() {
    alert(addNewPlayerDiv());
});

$(".player-name-field").focusout(function() {
    $(this).css("color", "grey");
    $(this).toggleClass("edit");
    if($(this).val().length === 0) {
        $(this).attr("placeholder", defaultPlayerNameText);
    }
});

$(".player-name-field").focusin(function() {
    $(this).css("color", "black");
    $(this).toggleClass("edit");
    $(this).attr("placeholder", "");
    $(this).append("<button>Done</button>");
});

$(".remove-player").click(function () {
	console.log($(this) + " happened.");
    $(this).toggle();
});

$("#player-3-name").focusin(function() {
    alert("Player 3 just got focus");
});