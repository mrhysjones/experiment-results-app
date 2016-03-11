    angular.module("ResultService", []).factory('ResultService', ['$resource', function($resource){
    	return $resource('/api/results/:id', null, {
    		'update': { method:'PUT' }, 
    	});
    }])