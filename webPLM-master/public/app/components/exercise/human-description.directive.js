(function(){
	'use strict';

	angular
		.module('PLMApp')
		.directive('humanDescription', humanDescription);

	function humanDescription() {
		return {
			restrict: 'E',
			templateUrl: '/assets/app/components/exercise/human-description.directive.html',
            link: function (scope, element, attrs) {
				$(document).foundation('alert', 'reflow');
			}
		};
	}
})();
