quizApp.controller('QuizController',
    function QuizController($scope,quiz){
        quiz.getQuizzes(function(event){
            $scope.quizzes = event;
        });
    }
);