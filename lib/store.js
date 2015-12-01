var Store = function (Api) {
  this.Api = Api;
};

Store.prototype.getStoreViews = function () {
  return this.Api.get('store/storeViews');
};

Store.prototype.getStoreGroups = function () {
  return this.Api.get('store/storeGroups');
};

Store.prototype.getWebsites = function () {
  return this.Api.get('store/websites');
};

Store.prototype.getStoreConfigs = function () {
  return this.Api.get('store/storeConfigs');
};

module.exports = Store;
