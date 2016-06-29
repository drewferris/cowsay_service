const vacasay = require('cowsay-browser');

module.exports = function(app) {
  app.controller('VacaController', function($http, VacaSayService) {
    this.message = VacaSayService.message;
    this.vaca = VacaSayService.makeVaca();
  });
};
