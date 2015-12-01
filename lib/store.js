var Store = function (Api) {
  this.Api = Api;
};

Store.prototype.getStoreConfigs = function (storeCodes) {
  return this.Api.get('store/storeConfigs', storeCodes);
};

Store.prototype.getStoreGroups = function () {
  return this.Api.get('store/storeGroups');
};

Store.prototype.getStoreViews = function () {
  return this.Api.get('store/storeViews');
};

Store.prototype.getWebsites = function () {
  return this.Api.get('store/websites');
};

module.exports = Store;
