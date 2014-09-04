'use strict';

/**
 * @ngdoc function
 * @name listablesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listablesApp
 */
angular.module('listablesApp').controller('MainCtrl', function ($scope) {
    "use strict";
    $scope.movies = ["Nosferatu", "Metropolis", "The Bicycle Thief", "Seven Samurai", "Aguirre, the Wrath of God"];

    $scope.addMovie = function () {
        if ($scope.movie) {
            $scope.movies.push($scope.movie);
            $scope.movie = "";
        }
    };

    $scope.removeMovie = function (movieIndex) {
        $scope.movies.splice(movieIndex, 1);
    };

  });
