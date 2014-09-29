'use strict';

app.factory('stats', ['$http', '$q', 'baseServiceUrl', function($http, $q, baseServiceUrl) {
    var baseApi = baseServiceUrl + '/api';


    function publicGetRequest(url){
        var deferred = $q.defer();

        $http.get(url)
            .success(function(response) {
                deferred.resolve(response);
            }, function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    return {
        systemStats: function() {
            return publicGetRequest(baseApi+'/stats');
        },
        trips : function() {
            return publicGetRequest(baseApi+'/trips');
        },
        drivers : function() {
            return publicGetRequest(baseApi+'/drivers');
        },
        cities : function() {
            return publicGetRequest(baseApi+'/cities');
        }

    }
}]);