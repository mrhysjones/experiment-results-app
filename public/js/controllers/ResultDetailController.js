angular.module('ResultDetailCtrl', ['ResultService', 'ExperimentService'])
.controller('ResultDetailController', function($scope, $sce, $routeParams, ResultService, ExperimentService) {

	ResultService.get({id: $routeParams.id},function(result){
		$scope.result = result; 

		$scope.emotionData = $scope.result.resultData[0].emotionData;

		$scope.options = {chart: {
			type: 'lineChart',
			height: 450,
			margin : {
				top: 20,
				right: 20,
				bottom: 40,
				left: 55
			},
			x: function(d){ return d.x; },
			y: function(d){ return d.y; },
			useInteractiveGuideline: true,
			dispatch: {
				stateChange: function(e){ console.log("stateChange"); },
				changeState: function(e){ console.log("changeState"); },
				tooltipShow: function(e){ console.log("tooltipShow"); },
				tooltipHide: function(e){ console.log("tooltipHide"); }
			},
			xAxis: {
				axisLabel: 'Frame Number'
			},
			yAxis: {
				axisLabel: 'Confidence value',
				tickFormat: function(d){
					return d3.format('.02f')(d);
				},
				axisLabelDistance: -10
			}, 
			yDomain: [0,1]
		},
		title: {
			enable: true,
			text: 'Emotion Experiment Results'
		},
		subtitle: {
			enable: true,
			html: '<a href=""> Original item source</a>', 
			css: {
				'text-align': 'center',
			}
		}
	};

	$scope.data = [{
		values: emotionChartData($scope.emotionData, 'angry'),
		key: 'Angry'
	},
	{
		values: emotionChartData($scope.emotionData, 'contempt'), 
		key: 'Contempt'
	}, 
	{
		values: emotionChartData($scope.emotionData, 'disgust'), 
		key: 'Disgust'
	}, 
	{
		values: emotionChartData($scope.emotionData, 'fear'), 
		key: 'Fear'
	}, 
	{
		values: emotionChartData($scope.emotionData, 'happy'), 
		key: 'Happy'
	}, 
	{
		values: emotionChartData($scope.emotionData, 'sadness'), 
		key: 'Sadness'
	}, 
	{
		values: emotionChartData($scope.emotionData, 'surprise'), 
		key: 'Surprise'
	}, 
	{
		values: emotionChartData($scope.emotionData, 'neutral'), 
		key: 'Neutral'
	}
	];
});

	function emotionChartData(emotionData, emotion){
		var emotions = [];
		for(var i = 0; i < emotionData.length; i++) {
			emotions.push({x: i, y: emotionData[i][emotion]});
		}
		return emotions;
	}
});