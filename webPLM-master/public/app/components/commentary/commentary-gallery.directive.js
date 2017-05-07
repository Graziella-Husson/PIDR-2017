(function(){
	'use strict';
	
	angular
		.module('PLMApp')
		.directive('commentaryGallery', commentaryGallery);
	
	function commentaryGallery () {
		return {
			restrict: 'E',
			templateUrl: '/assets/app/components/commentary/commentary-gallery.directive.html'
		};
	}
})();