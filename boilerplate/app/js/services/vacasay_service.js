const vacasay = require('cowsay-browser');
module.exports = function(app) {
  app.factory('VacaSayService', function() {
    const service = {};
    service.vaca = vacasay.say({text: 'moooo moooooo'});
    service.makeVaca = function(text, file) {
      file = file || 'www';
      text = text || 'moo';
      return vacasay.say({text, f:file});
    };

    return service;
  });
};
