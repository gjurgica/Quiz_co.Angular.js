(function(){
    var quizApp = angular.module('quizApp')
    quizApp.controller('QuizController',
    function QuizController($scope,quizService){
        quizService.getQuizzes(function(event){
            $scope.quizzes = event;
        });
    }
);
}())