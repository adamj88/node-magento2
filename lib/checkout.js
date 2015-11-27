var Api = require('./api');

var Checkout = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Checkout;
