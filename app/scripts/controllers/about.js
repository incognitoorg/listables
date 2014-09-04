'use strict';

/**
 * @ngdoc function
 * @name listablesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the listablesApp
 */
angular.module('listablesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
