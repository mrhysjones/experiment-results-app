angular.module('ResultDetailCtrl', ['ResultService', 'ExperimentService'])
.controller('ResultDetailController', function($scope, $sce, $routeParams, ResultService, ExperimentService) {

	ResultService.get({id: $routeParams.id},function(result){
		$scope.result = result; 
		ExperimentService.get({id: $scope.result.experimentID},function(exp){
			$scope.experiment = exp; 
			$scope.experimentName = $scope.experiment.name; 
			console.log($scope.experimentName);
		});

		$scope.emotionData = $scope.result.resultData[0].emotionData;
		$scope.angryData = emotionChartData($scope.emotionData, 'angry');
		$scope.contemptData = emotionChartData($scope.emotionData, 'contempt');
		$scope.disgustData = emotionChartData($scope.emotionData, 'disgust');
		$scope.fearData = emotionChartData($scope.emotionData, 'fear');
		$scope.happyData = emotionChartData($scope.emotionData, 'happy');
		$scope.sadnessData = emotionChartData($scope.emotionData, 'sadness');
		$scope.surpriseData = emotionChartData($scope.emotionData, 'surprise');
		$scope.neutralData = emotionChartData($scope.emotionData, 'neutral');

		$scope.labels = generateLabels($scope.emotionData.length);

		$scope.series = ["Angry", "Contempt", "Disgust", "Fear", "Happy", "Sadness", "Surprise", "Neutral"];
		$scope.data = [$scope.angryData, $scope.contemptData, $scope.disgustData, $scope.fearData, $scope.happyData, 
		$scope.sadnessData, $scope.surpriseData, $scope.neutralData];
		$scope.onClick = function (points, evt) {
			console.log(points, evt);
		};
	});





	function generateLabels(emotionLength){
		var labels = [];
		for (var i = 0; i < emotionLength; i++){
			labels.push("");
		}
		return labels;
	}

	function emotionChartData(emotionData, emotion){
		var emotions = [];
		for(var i = 0; i < emotionData.length; i++) {

			emotions.push(emotionData[i][emotion]);
		}
		return emotions;
	}
});