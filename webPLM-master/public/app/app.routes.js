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
      });
  }
})();