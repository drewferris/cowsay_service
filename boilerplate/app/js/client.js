const angular = require('angular');

var app = angular.module('VacaApp', []);
require('./services')(app);
require('./cows')(app);
