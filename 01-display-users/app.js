'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/search', {
      template: 'search',
    })
    .when('/result', {
      template: 'result',
    });
});
