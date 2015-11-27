var Api = require('./api');

var Catalog = function (opt) {

  this.api = new Api(opt);

};

Catalog.prototype.getCategories = function () {

  return this.api.get('categories');

};

module.exports = Catalog;
