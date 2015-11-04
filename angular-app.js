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
            $scope.setNumberOfPlayers = function(numberOfPlayers) {
                alert("New number of players is: " + sharedProperties.getNumberOfPlayers);
                sharedProperties.setNumberOfPlayers(numberOfPlayers);
                
            }
        });
             
        counterApp.controller('scoresCtrl', function($scope) {
            var twoTrainLengthScore = 2;
            var threeTrainLengthScore = 4;
            var fourTrainLengthScore = 7;
            var fiveTrainLengthScore = 10;
            var sixTrainLengthScore = 15;
            
            $scope.playerScore = 0;
            $scope.remainingTrains = 45;
            
            
            $scope.addScore = function(routeLength) {
                updateRemainingTrains(routeLength);
                
                switch(routeLength) {
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
                        break;
                    
                    default:
                        break;
                }
            };
            
            function updateScore(points) {
                $scope.playerScore += points;
            }
            
            function updateRemainingTrains(routeLength) {
                $scope.remainingTrains -= routeLength;
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
