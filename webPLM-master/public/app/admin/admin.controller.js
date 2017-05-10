(function () {
  'use strict';

  angular
    .module('PLMApp')
    .controller('Admin', Admin);

 Admin.$inject = [
//'$http', '$scope', '$state', '$sce', 'langs', 'connection', 'listenersHandler', 'navigation', 'gettextCatalog'
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

  function Admin(
//$http, $scope, $state, $sce, langs, connection, listenersHandler, navigation, gettextCatalog
 $window, $http, $scope, $sce, $stateParams, $location, $anchorScroll,
  connection, listenersHandler, langs, progLangs, exercisesList, navigation,
 canvas, drawWithDOM,
  blocklyService,
  $timeout, $interval,
  locker,
  BuggleWorld, BuggleWorldView,
  BatWorld, BatWorldView,
  TurtleWorld, TurtleWorldView,
  SortingWorld, SortingWorldView,
  SortingWorldSecondView,
  DutchFlagWorld, DutchFlagView, DutchFlagSecondView,
  PancakeWorld, PancakeView,
  BaseballWorld, BaseballView, BaseballSecondView,
  HanoiWorld, HanoiView
) {
       

function handleMessage(data) {
      console.log('message received: ', data);
      var cmd = data.cmd;
      var args = data.args;
	if(cmd=="getAllAdmin"){
		var table_html = document.getElementById("admin_table");
		args.forEach(function(entry) {
			var code=entry.code
			var exerc_name=entry.exercice
			//var comments=entry.commentaire.replace("|NEWCOMM|", "-----<br>")+"<br>"; 
			var comments=entry.commentaire.replace(new RegExp("\\|", "g"), "<br>-----<br>");
			var row_html = document.createElement("tr");

			var exerc_name_html=document.createElement("td");
			exerc_name_html.innerHTML=exerc_name;
			var code_html=document.createElement("td");
			code_html.innerHTML=code;
			var comments_html=document.createElement("td");
			comments_html.innerHTML=comments;
		    	row_html.appendChild(exerc_name_html);
			row_html.appendChild(code_html);
			row_html.appendChild(comments_html);
			table_html.appendChild(row_html);
		});	
	}
    }
    var offHandleMessage = listenersHandler.register('onmessage', handleMessage);
    var admin = this;
    admin.connection=connection;
    connection.sendMessage('getAllAdminMongo');
    Materialize.toast('Request GetAllAdmin', 4000);

   $scope.$on('$destroy', function () {
      offHandleMessage();
    });

  }
})();