'use strict';

app.factory('trips', ['$http', '$q', 'baseServiceUrl','authorization', function($http, $q, baseServiceUrl,authorization) {
    var tripsApi = baseServiceUrl + '/api/trips';

    function publicInfo() {
        var deferred = $q.defer();

        $http.get(tripsApi)
            .success(function(response) {
                deferred.resolve(response);
            }).error( function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    return {
        publicInfo: publicInfo,

        listWithFilters : function(page,sort,order,from,to,finished,mine,authenticated)
        {

            if(authenticated) {
                var deferred = $q.defer();
                var finalUrl = tripsApi;
                var params = "?";
                var paramCount = 0;
                if (page && !isNaN(page)) {
                    params += "page=" + page;
                    paramCount++;
                }
                if (sort) {
                    if (paramCount > 0) {
                        params += "&";
                    }
                    params += "orderBy=" + sort;
                    paramCount++;
                }
                if (order) {
                    if (paramCount > 0) {
                        params += "&";
                    }
                    params += "orderType=" + order;
                    paramCount++;
                }
                if (from) {
                    if (paramCount > 0) {
                        params += "&";
                    }
                    params += "from=" + from;
                    paramCount++;
                }
                if (to) {
                    if (paramCount > 0) {
                        params += "&";
                    }
                    params += "to=" + to;
                    paramCount++;
                }

                if (finished) {
                    if (paramCount > 0) {
                        params += "&";
                    }
                    params += "finished=" + finished;
                    paramCount++;
                }

                if (mine) {
                    if (paramCount > 0) {
                        params += "&";
                    }
                    params += "onlyMine=" + mine;
                    paramCount++;
                }
                if (paramCount > 0) {
                    finalUrl += params;
                }

                console.log(finalUrl);
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
}])