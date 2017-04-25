var app = angular.module('app', [])

.controller('Search', ['$scope', '$http', function ($scope, $http) {
  $scope.data;
  $scope.searchFood = function() {
    $http({
      method: 'POST',
      url: 'http://localhost:3000',
      headers: {'Content-type': 'application/json'},
      data: {data: $scope.food}
    }).then(function(res){
      console.log('Response from API received: ', res)
      $scope.data = res.data;
    });
  }
}]);
