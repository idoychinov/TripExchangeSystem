'use strict';

app.factory('httpInterceptor', ['$q', 'notifier', function($q, notifier) {
    return {
        'responseError': function(rejection) {
            var modelState = rejection.data.modelState;
            for(var errorModel in modelState) {
                for(var errorMessage in modelState[errorModel]) {
                    notifier.error(modelState[errorModel][errorMessage]);
                }
            }
            return $q.reject(rejection);
        }
    };
}]);