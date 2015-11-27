var Api = require('./api');

var ConfigurableProduct = function (opt) {

  this.Api = new Api(opt);

};

module.exports = ConfigurableProduct;
