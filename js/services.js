'use strict';

angular.module('counterApp')
    .factory('sharedProperties', function () {
            var numberOfPlayers = 0;
            var service = {}
            
            service.getNumberOfPlayers = function () {
                    return numberOfPlayers;
                };
            service.setNumberOfPlayers = function(number) {
                    numberOfPlayers = number;
                };
            
            return service;
        });