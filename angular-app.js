var counterApp = angular.module("counterApp", ['ngMaterial']);
                     
counterApp.directive('testTemplate', function($http, $compile) {
                return {
                    transclude: true,
                    templateUrl: 'ticket-to-ride-counter-template.html' 
                }
            })
        .directive('genericCounter', function($http, $compile) {
                return {
                    transclude: true,
                    templateUrl: 'generic-counter-template.html' 
                }
            }
        );

counterApp.module('myApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
});
        
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
