// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // Home Page (Experiments Listing)
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'ResultsController'
        })

        // Experiment Detail Page
        .when('/results/:id', {
            templateUrl: 'views/result.html',
            controller: 'ResultDetailController'
        })

        $locationProvider.html5Mode(true);

    }]);