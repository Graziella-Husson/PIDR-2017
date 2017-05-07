(function () {
  'use strict';

  angular
    .module('PLMApp')
    .controller('Commentary', Commentary);

  Commentary.$inject = [
'$http', '$scope', '$state', '$sce', 'langs', 'connection', 'listenersHandler', 'navigation', 'gettextCatalog'
];

  function Commentary(
$http, $scope, $state, $sce, langs, connection, listenersHandler, navigation, gettextCatalog
) {
       

function handleMessage(data) {
      console.log('message received: ', data);
      var cmd = data.cmd;
      var args = data.args;
	if(cmd=="getAll"){
		args.forEach(function(entry) {
    		commentary.animations.push(entry);
		console.log(entry);
	});	
	}
    }
    var commentary = this;
    commentary.connection=connection;
    commentary.animations = [];
     commentary.currentAnimation = null;
    commentary.setCurrentAnimation = setCurrentAnimation;
    commentary.goToAnimation = goToAnimation;

    var offHandleMessage = listenersHandler.register('onmessage', handleMessage);

          connection.sendMessage('getAllMongo');
          Materialize.toast('Request GetAll', 4000);
    
 function goToAnimation(){
	$state.go('animation');
 }

function setCurrentAnimation(animation){
console.log(animation);
commentary.currentAnimation = animation;
}
    $scope.$on('$destroy', function () {
      offHandleMessage();
    });
  }
})();