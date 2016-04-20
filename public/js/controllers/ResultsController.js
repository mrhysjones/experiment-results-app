angular.module('ResultsCtrl', ['ResultService']).controller('ResultsController', function($scope, ResultService) {
	$scope.results = ResultService.query();

	// Function to delete result on table click through API call and refresh
	$scope.delete = function(resultID){
		  ResultService.delete({ id: resultID }, function() {
    	$scope.results = ResultService.query(); // Refresh results
  });
	};

	// Function used to construct URL for item href - requires item type and data
	$scope.constructHrefUrl = function(type, data){
		var hrefUrl = "";

		switch(type){
			// Assume in the format 'https://twitter.com/*Username/status/*ID'
			case 'twitter':
			hrefUrl = data;
			break;

			// Assume just the video ID passed in - construct YouTube watch URL
			case 'youtube':
			hrefUrl = 'https://www.youtube.com/watch?v=' + data;
			break;

					// Check if absolute URL - append 'http://' if required
			case 'webpage':
				if (data.substring(0, 4) != 'http'){
					data = 'http://' + data;
				}
				hrefUrl = data;
				break;
		}
		return hrefUrl;
	}

});
