'use strict';

app.factory('cities', ['$http', '$q', 'baseServiceUrl', function($http, $q, baseServiceUrl) {
    var statsApi = baseServiceUrl + '/api/cities';

    return {
        getAll: function() {
            var deferred = $q.defer();

            $http.get(statsApi)
                .success(function(response) {
                    deferred.resolve(response);
                }, function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        }
    }
}])