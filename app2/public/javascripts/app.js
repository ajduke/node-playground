var app = angular.module('myapp', []);

app.controller('service',["$scope","$http", function($scope, $http){
  console.log('inside controller ');
  $http.get('/user')
    .then(function(res){
      console.log('got ther response ', JSON.stringify(res.data));
      $scope.users = res.data;
    }, function(err){
      console.log('Oops, some error here');
    })
}]);
