// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // Result listing
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'ResultsController'
        })

        // Result detail
        .when('/result/:id', {
            templateUrl: 'views/result.html',
            controller: 'ResultDetailController'
        })

        $locationProvider.html5Mode(true);

    }]);
