(function () {
  'use strict';

  angular
    .module('PLMApp')
    .controller('Commentary', Commentary);

  Commentary.$inject = [
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

  function Commentary(
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
	if(cmd=="getAll"){
		console.log(args);
	}
    }
    var commentary = this;
    commentary.connection=connection;
          connection.sendMessage('getAllMongo');
          Materialize.toast('Request GetAll', 4000);
    
    
    
  }
})();