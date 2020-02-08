(function(){
    var quizApp = angular.module('quizApp')
    quizApp.controller('NewQuizController',
        function NewQuizController($scope,quizService,$location,$log){
            $scope.newQuiz = {};
            $scope.addQuiz = function(){
                quizService.addQuiz($scope.newQuiz);
                $location.path('/home');
                $log.warn($scope.newQuiz)
            }
        }
    );
}())