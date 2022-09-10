'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/page1', {
      templateUrl: 'pages/page1.html',
    })
    .when('/page2', {
      templateUrl: 'pages/page2.html',
    });
});
