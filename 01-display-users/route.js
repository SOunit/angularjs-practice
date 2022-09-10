app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/page1', {
      templateUrl: 'pages/page1.html',
      controller: 'usersController',
    })
    .when('/page2', {
      templateUrl: 'pages/page2.html',
    })
    .when('/users/:id', {
      templateUrl: 'pages/user.html',
      controller: 'userDetailController',
    });
});
