(function(){
	'use strict';
	
	angular
		.module('PLMApp')
		.directive('save', save);
	
	function save () {
		return {
			restrict: 'E',
			templateUrl: '/assets/app/components/exercise/save.directive.html'
		};
	}
})();