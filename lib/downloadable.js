var Api = require('./api');

var Downloadable = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Downloadable;
