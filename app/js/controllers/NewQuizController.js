quizApp.controller('NewQuizController',
    function QuizController($scope,quiz){
        quiz.postQuiz(function(event){
            $scope.quizzes = event;
        });
    }
);