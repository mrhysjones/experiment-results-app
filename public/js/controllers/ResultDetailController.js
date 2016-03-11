angular.module('ResultDetailCtrl', ['ResultService'])
.controller('ResultDetailController', function($scope, $sce, $routeParams, ResultService) {
	$scope.result = ResultService.get({id: $routeParams.id});
	$scope.currenthost = location.host;

});