var Backend = function (Api) {

  this.Api = Api;

};

Backend.prototype.getModules = function () {

  return this.Api.get('modules');

};

module.exports = Backend;
