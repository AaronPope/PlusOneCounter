'use strict';

angular.module('counterApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('pink');
});