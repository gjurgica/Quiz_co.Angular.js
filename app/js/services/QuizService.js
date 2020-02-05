(function(){
    var quizApp = angular.module('quizApp')
    quizApp.factory('quizService',function($http,$log){
        return {
            getQuizzes:function(successible){
                $http({method:'GET',url:'http://localhost:63040/api/quiz'})
                .success(function(data){
                    successible(data);
                    $log.warn(data)
                })
                .error(function(data){
                    $log.warn(data);
                    
                })
            },
            addQuiz:function(newQuiz){
                $http({
                    method: 'POST',
                    url: 'http://localhost:63040/api/quiz/newquiz',
                    data: newQuiz
                })
                .then(function(response){
                    $log.warn(response.data);
                    return response.data;
                })
                .catch(function(response){
                    $log.warn(response.status);
                    return response.status;
                })
            }
        }
        
    })
}())