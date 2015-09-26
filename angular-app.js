var counterApp = angular.module("counterApp", []);
             
        counterApp.controller('scoresCtrl', function($scope) {
            $scope.twoTrainLengthScore = 2;
            $scope.threeTrainLengthScore = 4;
            $scope.fourTrainLengthScore = 7;
            $scope.fiveTrainLengthScore = 10;
            $scope.sixTrainLengthScore = 15;
            
            $scope.playerScore = 0;
            
            
            $scope.addScore = function(value) {
                $scope.playerScore += value;
            };
        })
        .directive('testTemplate', ['$http', '$complile', 
            function($http, $compile) {
                return {
                    templateUrl: 'template.html', 
                }
            }
        ]);
        
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
