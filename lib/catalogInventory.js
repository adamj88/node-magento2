var Api = require('./api');

var CatalogInventory = function (opt) {

  this.Api = new Api(opt);

};

module.exports = CatalogInventory;
