'use strict';

angular.module('counterApp')
    .controller('playersCtrl', function($scope) {
            $scope.players = [];
            
            $scope.setNumberOfPlayers = function(numberOfPlayers) {
                if(numberOfPlayers > $scope.players.length) {
                    while($scope.players.length < numberOfPlayers)
                    {
                        $scope.players.push(
                                            {
                                                name: "Enter your name", 
                                                score: 0, 
                                                remainingTrains: 45
                                            }
                                           );
                    }
                }
                else if (numberOfPlayers < $scope.players.length) {
                    while($scope.players.length > numberOfPlayers)
                    {
                        $scope.players.pop();
                    }
                }
                
            }
        })
    .controller('scoresCtrl', function($scope, sharedProperties) {
            var oneTrainLengthScore = 1;
            var twoTrainLengthScore = 2;
            var threeTrainLengthScore = 4;
            var fourTrainLengthScore = 7;
            var fiveTrainLengthScore = 10;
            var sixTrainLengthScore = 15;
            
            var finalRound = false;
            
            var scoreResetValue = 0;
            var remainingTrainsResetValue = 45;
            
            
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
            
            $scope.resetScores = function() {
                $scope.remainingTrains = 45;
                $scope.playerScore = 0;
            }
        });