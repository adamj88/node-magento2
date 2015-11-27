var Api = require('./api');

var Backend = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Backend;
