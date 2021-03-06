(function () {
    'use strict';
    calendarApp.service('cmApiService', ['$q', 'googleClient', function ($q, googleClient) {
        this.execute = function (apiMethod, params) {
            const deferred = $q.defer();
            googleClient.afterApiLoaded().then(function () {
                    apiMethod = apiMethod.split('.');
                    let method = gapi.client;
                    angular.forEach(apiMethod, function (m) {
                        method = method[m];
                    }, method);
                    let request;
                    if (typeof params === 'undefined') {
                        request = method();
                    } else {
                        request = method(params);
                    }
                    request.then(
                        function (resp) {
                            deferred.resolve(resp);
                        },
                        function (reason) {
                            deferred.reject(reason);
                        });
                },
                function (e) {
                    deferred.reject(e);
                });
            return deferred.promise;
        };
    }]);
})();
