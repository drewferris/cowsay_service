'use strict';

module.exports = function(app) {
  app.directive('vacaNote', function() {
    return {
      templateUrl: './templates/vacas/vaca_note.html',
      scope: {
        text: '=',
        file: '@'
      },
      transclude: true,
      controller: function($scope, VacaSayService) {
        $scope.vaca = VacaSayService.makeVaca($scope.text, $scope.file);
      }
    };
  });
};
