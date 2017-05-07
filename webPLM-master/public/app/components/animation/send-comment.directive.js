(function(){
	'use strict';
	
	angular
		.module('PLMApp')
		.directive('sendComment', sendComment);
	
	function sendComment () {
		return {
			restrict: 'E',
			templateUrl: '/assets/app/components/animation/send-comment.directive.html'
		};
	}
})();