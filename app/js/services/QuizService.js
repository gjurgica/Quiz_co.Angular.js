quizApp.factory('quiz',function($http,$log){
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
        }
    }
})