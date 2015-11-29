var Integration = function (Api) {

  this.Api = Api;
  this.username = Api.username;
  this.password = Api.password;
  this.isAdmin = Api.isAdmin;

};

Integration.prototype.getToken = function () {

  var endpoint = 'integration/customer/token';

  if (this.isAdmin) {
    endpoint = 'integration/admin/token';
  }

  var data = {
    username: this.username,
    password: this.password
  };

  return this.Api.post(endpoint, data);

};

module.exports = Integration;
