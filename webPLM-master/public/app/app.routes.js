(function () {
  'use strict';

  angular
    .module('PLMApp')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    // catch all non-supported routes
    // redirect user to the home page 
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'assets/app/home/home.html',
        controller: 'Home',
        controllerAs: 'home'
      })
	 .state('commentary', {
        url: '/ui/commentary',
        templateUrl: 'assets/app/commentary/commentary.html',
        controller: 'Commentary',
        controllerAs: 'commentary'
      })
	 .state('admin', {
        url: '/ui/admin',
        templateUrl: 'assets/app/admin/admin.html',
        controller: 'Admin',
        controllerAs: 'admin'
      })
	 .state('help', {
        url: '/ui/help',
        templateUrl: 'assets/app/help/help.html',
        controller: 'Help',
        controllerAs: 'help'
      })
      .state('exercise', {
        url: '/ui/lessons/:lessonID/:exerciseID',
        templateUrl: 'assets/app/exercise/exercise.html',
        params: {
          lessonID: {
            value: null,
            squash: false
          },
          exerciseID: {
            value: '',
            squash: false
          }
        },
        controller: 'Exercise',
        controllerAs: 'exercise'
      })

	 .state('animation', {
	        url: '/ui/animation',
	        templateUrl: 'assets/app/animation/animation.html',
		params:{
		   animationObject:{
			value:null,
			squash:true
		    }
		},
	        controller: 'Animation',
	        controllerAs: 'animation'
      });
  }
})();