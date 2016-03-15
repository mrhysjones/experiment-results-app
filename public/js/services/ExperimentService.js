    angular.module("ExperimentService", []).factory('ExperimentService', ['$resource', function($resource){
    	return $resource('http://178.62.96.23:3000/api/experiments/:id', null, {
    		'update': { method:'PUT' }, 
    	});
    }])