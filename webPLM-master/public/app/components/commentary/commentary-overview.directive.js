(function(){
	'use strict';
	
	angular
		.module('PLMApp')
		.directive('commentaryOverview', commentaryOverview);
	
	function commentaryOverview () {
		return {
			restrict: 'E',
			templateUrl: '/assets/app/components/commentary/commentary-overview.directive.html'
		};
	}
})();