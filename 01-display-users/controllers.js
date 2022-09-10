app.controller('usersController', function ($scope, $http) {
  $http.get('https://jsonplaceholder.typicode.com/users').then(
    function (result) {
      console.log(result);
      $scope.users = result.data;
    },
    function (error) {
      console.log(error);
    }
  );
});

app.controller('userDetailController', function ($scope, $routeParams, $http) {
  var id = $routeParams.id;

  $http.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    function (result) {
      console.log(result);
      $scope.user = result.data;
    },
    function (error) {
      console.log(error);
    }
  );
});
