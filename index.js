var app = angular.module('app', [])

.controller('Search', ['$scope', '$http', function ($scope, $http) {
  $scope.data = {
    food: 0,
    protein: 0,
    calories: 0,
    ratio: 0
  };

  $scope.recentSearches = [];

  $scope.searchFood = function() {
    $http({
      method: 'POST',
      url: 'http://localhost:3000',
      headers: {'Content-type': 'application/json'},
      data: {data: $scope.food}
    }).then(function(res) {
      console.log('Response from API received: ', res)
      $scope.data.food = res.data.hits[0].fields.item_name;
      $scope.data.protein = res.data.hits[0].fields.nf_protein;
      $scope.data.calories = res.data.hits[0].fields.nf_calories;
      $scope.data.result = Math.abs(res.data.hits[0].fields.nf_calories / res.data.hits[0].fields.nf_protein);

    });
    $scope.retrieveFromDb();

  }

    $scope.retrieveFromDb = function() {
      $http({
        method: 'GET',
        url: 'http://localhost:3000/retrieveFood',
        headers: {'Content-type': 'application/json'},
      }).then(function(res) {
        console.log('Successefully retrieved data from db', res)
        $scope.recentSearches = res.data;
      });
    }

    $scope.retrieveFromDb();



}]);
