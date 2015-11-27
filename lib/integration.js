var Api = require('./api');

var Integration = function (opt) {

  this.Api = new Api(opt);

};

Integration.prototype.getToken = function (isAdmin) {

  var endpoint = 'integration/customer/token';

  if (isAdmin) {
    endpoint = 'integration/admin/token';
  }

  var data = {
    username: this.Api.username,
    password: this.Api.password
  };

  return this.Api.post(endpoint, data);

};

module.exports = Integration;
