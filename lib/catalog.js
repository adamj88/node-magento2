var Catalog = function (Api) {

  this.Api = Api;

};

Catalog.prototype.getCategories = function () {

  return this.Api.get('categories');

};

module.exports = Catalog;
