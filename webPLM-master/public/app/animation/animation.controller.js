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
	animation.connection=connection;
	animation.animationObject = $stateParams.animationObject;
	animation.images = animation.animationObject.description;
	animation.toShow=animation.images.split(" ");
	animation.currentimg=0;
	var divAnimation=document.getElementById("displayAnimation");
	animation.timer = "";
        animation.commentaire="";
        animation.exerciseName=animation.animationObject.exerciseName;
	animation.replayAnimation=replayAnimation;
	animation.playAnimation=playAnimation;
	animation.pauseAnimation=pauseAnimation;
	animation.saveComment=saveComment;
	replayAnimation();
	
	function changeimage(){
		if(animation.currentimg==animation.toShow.length-1){clearInterval(animation.timer);}
		var node = document.createElement("img");
		node.src=animation.toShow[animation.currentimg];
		divAnimation.innerHTML="";
	 	divAnimation.appendChild(node);
		animation.currentimg+=1;
	}

	function replayAnimation(){
		clearInterval(animation.timer);
		animation.currentimg=0;
		animation.timer = setInterval(changeimage, 1000);
	}

	function playAnimation(){
		if(animation.currentimg<=animation.toShow.length-1){
			clearInterval(animation.timer);
			animation.timer = setInterval(changeimage, 1000);
		}
	}

	function pauseAnimation(){
		clearInterval(animation.timer);
	}

	function saveComment(){
	var commentaire = document.getElementById("comment").value ;
		animation.commentaire = commentaire;
		if(animation.commentaire!=""){
		  var args = { code: animation.animationObject.code};
	          args.commentaire = animation.commentaire;
		 args.exerciseName=animation.exerciseName;
		  connection.sendMessage('saveComment',args);
          	  Materialize.toast('Merci de votre contribution !', 4000);
	       }else{
          	 	Materialize.toast('Commentaire vide !', 4000);
		}
	}

	

    }
})();
