angular.module('ResultsCtrl', ['ResultService']).controller('ResultsController', function($scope, ResultService) {
	$scope.results = ResultService.query();

	// Function to delete result on table click through API call and refresh
	$scope.delete = function(resultID){
		  ResultService.delete({ id: resultID }, function() {
    $scope.results = ResultService.query();
  });
	};

});