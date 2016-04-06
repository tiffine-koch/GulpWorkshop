'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', ['$scope', '$interval', function($scope, $interval) {
  $scope.name = 'Cade';

  $scope.numbers = [1,2,3];

  $interval(function() {
    alert("hey! listen!");
  }, 1000);
}]);

// $(document).ready(init);
//
// function init() {
//   console.log('WooHoo!');
//   console.log('2 + 4 = ', sum(2,4));
// }
//
// var arr = [1,2,3,4,5];
//
// if(arr.includes(3)) console.log('i found a 3!');
// //this is my sum function
// function sum(x, y) {
//   return x + y;
// }
