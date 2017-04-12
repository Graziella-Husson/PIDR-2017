(function () {
  'use strict';

  angular
    .module('PLMApp')
    .controller('Commentary', Commentary);

  Commentary.$inject = ['$http', '$scope', '$state', '$sce', 'langs', 'connection', 'listenersHandler', 'navigation', 'gettextCatalog'];

  function Commentary($http, $scope, $state, $sce, langs, connection, listenersHandler, navigation, gettextCatalog) {
    var commentary = this;

    commentary.lessons = [];
    commentary.currentLesson = null;
    commentary.currentExerciseID = '';

    commentary.getLessons = getLessons;
    commentary.setLessons = setLessons;
    commentary.setCurrentLesson = setCurrentLesson;
    commentary.goToLesson = goToLesson;

    navigation.setCurrentPageTitle(gettextCatalog.getString('Commentary'));

    var offHandleMessage = listenersHandler.register('onmessage', handleMessage);

    getLessons();

    function handleMessage(data) {
      var cmd = data.cmd;
      var args = data.args;

      console.log('message received: ', data);
      switch (cmd) {
      case 'lessons':
      case 'newHumanLang':
        setLessons(args.lessons);
        break;
      }
    }

    function getLessons() {
      connection.sendMessage('getLessons', null);
    }

    function setLessons(lessons) {
      home.lessons = lessons.map(function (lesson) {
        lesson.description = $sce.trustAsHtml(lesson.description);
        return lesson;
      });
      home.currentLesson = null;
      console.log('updated commentary.lessons: ', commentary.lessons);
    }

    function setCurrentLesson(lesson) {
      home.currentLesson = lesson;
    }

    function goToLesson() {
      $state.go('exercise', {
        'lessonID': commentary.currentLesson.id
      });
    }

    $scope.$on('$destroy', function () {
      offHandleMessage();
    });
  }
})();