module.exports = function(app) {
  app.controller('VacaController', function($http, VacaSayService) {
    this.vacadata = '';
    this.vacasay = function(moo) {
      this.vacadata = VacaSayService.say(moo);
    };
  });
};
