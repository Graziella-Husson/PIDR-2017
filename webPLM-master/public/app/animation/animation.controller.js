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
for(i=0;i<animation.toShow.length;i++){
//AJOUT DANS LE HTML 
	var node = document.createElement("img");
	node.src=animation.toShow[i];
	document.getElementById("slider").appendChild(node);
}
console.log(animation.images);

}
})();
