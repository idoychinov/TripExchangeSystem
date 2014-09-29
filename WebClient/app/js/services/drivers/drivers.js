'use strict';

app.factory('drivers', ['$http', '$q', 'baseServiceUrl', 'authorization', function($http, $q, baseServiceUrl, authorization) {
    var driversApi = baseServiceUrl+'/api/drivers';

    function publicInfo() {
        var deferred = $q.defer();

        $http.get(driversApi)
            .success(function(response) {
                deferred.resolve(response);
            }).error( function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    return {
        publicInfo: publicInfo,

        listWithFilters : function(page,search,authenticated)
        {

            if(authenticated) {
                var deferred = $q.defer();
                var finalUrl = driversApi;
                var params = "?";
                var paramCount = 0;
                if (page && !isNaN(page)) {
                    params += "page=" + page;
                    paramCount++;
                }
                if (search) {
                    if (paramCount > 0) {
                        params += "&";
                    }
                    params += "username=" + search;
                    paramCount++;
                }
                if (paramCount > 0) {
                    finalUrl += params;
                }

                var headers = authorization.getAuthorizationHeader();


                $http.get(finalUrl,{ headers: headers })
                    .success(function (response) {
                        deferred.resolve(response);
                    }).error(function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }
            else
            {
                return publicInfo();
            }
        }
    }
}]);