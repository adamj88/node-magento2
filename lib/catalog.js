var Api = require('./api');

var Catalog = function (opt) {

  this.Api = new Api(opt);

};

Catalog.prototype.getCategories = function () {

  return this.Api.get('categories');

};

module.exports = Catalog;
