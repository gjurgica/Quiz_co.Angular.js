'use strict';

var quizApp = angular.module('quizApp', ['ngRoute','ngAria'])
.config(function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'templates/home.html',
        controller:'QuizController'
    })
    .when('/newquiz',{
        templateUrl:'templates/newquiz.html'
    })
    .otherwise({
        redirectTo:'/home'
    })
});
