module.exports = function(app) {
  app.controller('VacaController', function($http, VacaSayService) {
    this.vaca = VacaSayService.makeVaca();
  });
};
