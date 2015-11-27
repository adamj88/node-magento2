var Api = require('./api');

var Customer = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Customer;
