// var http = require('https');
var app = angular.module('myapp', [])

.controller('Search', ['$scope', function ($scope, $http) {

  $scope.data = {};

  $scope.searchFood = function() {
    $http({
      method: 'POST',
      url: 'http://127.0.0.1:3000',
      data: {}
    }).then(function(response){
      $scope.data = response;
    });
  }
}]);
