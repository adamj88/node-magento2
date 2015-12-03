var Catalog = function (Api) {
  this.Api = Api;
};

Catalog.prototype.getCategories = function () {
  return this.Api.get('categories');
};

Catalog.prototype.getCategory = function (id) {
  return this.Api.get({
    categories: id
  });
};

module.exports = Catalog;
