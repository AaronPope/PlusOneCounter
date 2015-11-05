var counterApp = angular.module("counterApp", []);

        counterApp.service('sharedProperties', function () {
            var numberOfPlayers = 0;

            return {
                getNumberOfPlayers: function () {
                    return numberOfPlayers;
                },
                setNumberOfPlayers: function(number) {
                    numberOfPlayers = number;
                }
            };
        });

        counterApp.controller('playersCtrl', function($scope) {
            
        });
             
        counterApp.controller('scoresCtrl', function($scope) {
            var oneTrainLengthScore = 1;
            var twoTrainLengthScore = 2;
            var threeTrainLengthScore = 4;
            var fourTrainLengthScore = 7;
            var fiveTrainLengthScore = 10;
            var sixTrainLengthScore = 15;
            
            var finalRound = false;
            $scope.players = [];
            
            
            
            $scope.playerScore = 0;
            $scope.remainingTrains = 45;
            
            
            $scope.addScore = function(routeLength) {
                if($scope.remainingTrains >= routeLength) {
                switch(routeLength) {
                    case 1:
                        updateScore(oneTrainLengthScore);                        
                        break;
                        
                    case 2:
                        updateScore(twoTrainLengthScore);                        
                        break;
                        
                    case 3:
                        updateScore(threeTrainLengthScore);
                        break;
                        
                    case 4:
                        updateScore(fourTrainLengthScore);
                        break;
                    
                    case 5:
                        updateScore(fiveTrainLengthScore);
                        break;
                        
                    case 6:
                        updateScore(sixTrainLengthScore);
                        addPlayer(routeLength);
                        break;
                    
                    default:
                        break;
                }
                
                updateRemainingTrains(routeLength);
                }
            };
            
            function updateScore(points) {
                $scope.playerScore += points;
            }
            
            function updateRemainingTrains(routeLength) {
                if($scope.remainingTrains < routeLength) {
                    alert("Hmm... Something's not adding up.\n\nIt doesn't seem that you have enough trains to play that route!");
                }
                else {
                    $scope.remainingTrains -= routeLength;    
                }
                
                if($scope.remainingTrains <= 2 && !finalRound) {
                    alert("You have initiated the final round!  Everyone gets one more play.");
                    finalRound = true;
                }
            }
            
            $scope.setNumberOfPlayers = function(numberOfPlayers) {
                if(numberOfPlayers > $scope.players.length);
                {
                    while($scope.players.length < numberOfPlayers)
                    {
                        $scope.players.push({name: "Enter your name", score: 0, remainingTrains: 45});
                    }
                }
                
            }
        })
        .directive('testTemplate', function($http, $compile) {
                return {
                    transclude: true,
                    templateUrl: 'ticket-to-ride-counter-template.html' 
                }
            }
        )
        .directive('genericCounter', function($http, $compile) {
                return {
                    transclude: true,
                    templateUrl: 'generic-counter-template.html' 
                }
            }
        );
        
        $("button").mousedown(function() {
           toggleButtonBackgroundPositive($(this));
        })
        .mouseup(function() {
           toggleButtonBackgroundPositive($(this));
        })
        //removes the background color even if the mouse is pulled away from the button
        .mouseleave(function() {
            if($(this).hasClass("click-background-color-positive")) {
                toggleButtonBackgroundPositive($(this));
            }
        });
        
        var toggleButtonBackgroundPositive = function(element) {
            $(element).toggleClass("click-background-color-positive");
        }
        
        var toggleButtonBackgroundNegative = function(element) {
            $(element).toggleClass("click-background-color-negative");
        }
        
        $("#reset-scores-option").click(function() {
            alert("it was clicked");
        });
