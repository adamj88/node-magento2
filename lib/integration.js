var Api = require('./api');

var Integration = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Integration;
