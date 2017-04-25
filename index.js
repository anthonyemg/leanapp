var app = angular.module('app', [])

.controller('Search', ['$scope', '$http', function ($scope, $http) {
  $scope.data = {
    food: 0,
    protein: 0,
    calories: 0,
    result: 0
  };

  $scope.searchFood = function() {
    $http({
      method: 'POST',
      url: 'http://localhost:3000',
      headers: {'Content-type': 'application/json'},
      data: {data: $scope.food}
    }).then(function(res){
      console.log('Response from API received: ', res)
      $scope.data.food = res.data.hits[0].fields.item_name;
      $scope.data.protein = res.data.hits[0].fields.nf_protein;
      $scope.data.calories = res.data.hits[0].fields.nf_calories;
      $scope.data.result = Math.abs(res.data.hits[0].fields.nf_calories / res.data.hits[0].fields.nf_protein);
    });
  }
}]);


      // $scope.data = res.data.hits[0];
