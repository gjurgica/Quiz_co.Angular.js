(function(){

    var quizApp = angular.module('quizApp', ['ngRoute','ngAria','ngCookies'])
    .config(function($routeProvider){
        $routeProvider.when('/home',{
            templateUrl:'templates/home.html',
            controller:'QuizController'
        })
        .when('/newquiz',{
            templateUrl:'templates/newquiz.html',
            controller:'NewQuizController'
        })
        .otherwise({
            redirectTo:'/home'
        })
    });
}())

