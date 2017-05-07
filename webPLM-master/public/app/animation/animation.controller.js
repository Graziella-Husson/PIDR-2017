(function () {
  'use strict';

  angular
    .module('PLMApp')
    .controller('Animation', Animation);

  Animation.$inject = [
  '$window', '$http', '$scope', '$sce', '$stateParams', '$location', '$anchorScroll',
  'connection', 'listenersHandler', 'langs', 'progLangs', 'exercisesList', 'navigation',
  'canvas', 'drawWithDOM',
  'blocklyService',
  '$timeout', '$interval',
  'locker',
  'BuggleWorld', 'BuggleWorldView',
  'BatWorld', 'BatWorldView',
  'TurtleWorld', 'TurtleWorldView',
  'SortingWorld', 'SortingWorldView',
  'SortingWorldSecondView',
  'DutchFlagWorld', 'DutchFlagView', 'DutchFlagSecondView',
  'PancakeWorld', 'PancakeView',
  'BaseballWorld', 'BaseballView', 'BaseballSecondView',
  'HanoiWorld', 'HanoiView'
 ];

function Animation($window, $http, $scope, $sce, $stateParams, $location, $anchorScroll,
    connection, listenersHandler, langs, progLangs, exercisesList, navigation,
    canvas, drawWithDOM,
    blocklyService,
    $timeout, $interval,
    locker,
    BuggleWorld, BuggleWorldView,
    BatWorld, BatWorldView,
    TurtleWorld, TurtleWorldView,
    SortingWorld, SortingWorldView, SortingWorldSecondView,
    DutchFlagWorld, DutchFlagView, DutchFlagSecondView,
    PancakeWorld, PancakeView,
    BaseballWorld, BaseballView, BaseballSecondView,
    HanoiWorld, HanoiView) {

	var animation=this;
	animation.animationObject = $stateParams.animationObject;
	animation.images = animation.animationObject.description;
	animation.toShow=animation.images.split(" ");
	animation.currentimg=0;
	var divAnimation=document.getElementById("displayAnimation");
	animation.timer = "";
	animation.playAnimation=playAnimation;
	playAnimation();
	
	function changeimage(){
		if(animation.currentimg==animation.toShow.length-1){clearInterval(animation.timer);}
		var node = document.createElement("img");
		node.src=animation.toShow[animation.currentimg];
		divAnimation.innerHTML="";
	 	divAnimation.appendChild(node);
		animation.currentimg+=1;
	}
	
	function playAnimation(){
		animation.currentimg=0;
		animation.timer = setInterval(changeimage, 1000);
	}
    }
})();
