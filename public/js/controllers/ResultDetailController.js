pangular.module('ResultDetailCtrl', ['ResultService'])
.controller('ResultDetailController', function($scope, $sce, $routeParams, ResultService) {

	ResultService.get({id: $routeParams.id},function(result){
		// Use ResultService to obtain result data for result with routeParams ID
		$scope.result = result;

		// Extract emotionData from result
		$scope.emotionData = $scope.result.resultData[0].emotionData;

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

		// Compute item source using itemData and constructHrefUrl function
		$scope.itemSource = $scope.constructHrefUrl($scope.result.itemData[0].dataType, $scope.result.itemData[0].data)

		// Set up angular-nvd3 line chart options
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
			html: '<a href= ' + $scope.itemSource + '> Original item source </a>',
			css: {
				'text-align': 'center',
			}
		}
	};
	// Set up line chart series
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

 	/*
	Function to convert a single emotion's data into format needed for chart
	emotionData is the array of the emotion measurements returned by result
	emotion is a string for series to convert e.g. 'happy', 'surprise'
	*/
	function emotionChartData(emotionData, emotion){
		var emotions = [];
		for(var i = 0; i < emotionData.length; i++) {
			emotions.push({x: i, y: emotionData[i][emotion]});
		}
		return emotions;
	}
});
