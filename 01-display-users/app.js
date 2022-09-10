'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

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
