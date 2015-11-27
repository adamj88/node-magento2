var Api = require('./api');

var Quote = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Quote;
