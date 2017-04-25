(function () {
  'use strict';

  angular
    .module('PLMApp')
    .controller('Commentary', Commentary);

  Commentary.$inject = ['$http', '$scope', '$state', '$sce', 'langs', 'connection', 'listenersHandler', 'navigation', 'gettextCatalog'];

  function Commentary($http, $scope, $state, $sce, langs, connection, listenersHandler, navigation, gettextCatalog) {
       
      $scope.getAllData = function(){
          connection.sendMessage('getAllMongo');
          Materialize.toast('Request GetAll', 4000);
	}

function handleMessage(data) {
      var cmd = data.cmd;
      var args = data.args;

      console.log('message received: ', data);
      switch (cmd) {
      case 'lessons':
      case 'newHumanLang':
        setLessons(args.lessons);
        break;
      case 'getAll':
	console.log(args);
	break;
      }
    }
    var commentary = this;
    commentary.allData = $scope.getAllData();

    
    
    $scope.$on('$destroy', function () {
      offHandleMessage();
    });

  }
})();