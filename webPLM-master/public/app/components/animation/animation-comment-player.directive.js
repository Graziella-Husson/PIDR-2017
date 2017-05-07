(function(){
	'use strict';
	
	angular
		.module('PLMApp')
		.directive('animationCommentPlayer', animationCommentPlayer);
	
	function animationCommentPlayer () {
		return {
			restrict: 'E',
			templateUrl: '/assets/app/components/animation/animation-comment-player.directive.html'
		};
	}
})();