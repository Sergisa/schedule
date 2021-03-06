(function () {
    'use strict';
    calendarApp.directive('cmGoogleSignIn', ['$http', 'googleClient', function ($http, googleClient) {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                clickHandler: '=?',
                signInListener: '=?',
                userListener: '=?'
            },
            template: '<ng-transclude></ng-transclude>',
            link: function (scope, element, attrs) {
                function clickHandler(googleUser) {
                    scope.$apply(scope.clickHandler(googleUser));
                }

                function userListener(googleUser) {
                    gapi.auth.setToken(googleUser.getAuthResponse());
                    if (typeof scope.userListener !== 'undefined') {
                        scope.$apply(scope.userListener(googleUser));
                    }
                }

                function signInListener(val) {
                    scope.$apply(scope.signInListener(val));
                }

                if (typeof scope.clickHandler === 'undefined') {
                    scope.clickHandler = angular.noop;
                }
                googleClient.afterScriptsLoaded().then(
                    function () {
                        const auth2 = gapi.auth2.getAuthInstance();
                        if (typeof scope.signInListener !== 'undefined') {
                            auth2.isSignedIn.listen(signInListener);
                        }
                        auth2.currentUser.listen(userListener);
                        auth2.attachClickHandler(element[0], {}, clickHandler, function (error) {
                            throw new Error(JSON.stringify(error, undefined, 2))
                        });
                    },
                    function (e) {
                        console.log(e);
                    }
                );
            }
        };
    }]);
})();
