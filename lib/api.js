var rest = require('restler');

var Api = function (opt) {

  opt = opt || {};

  this.setOptions(opt);

};

Api.prototype.setOptions = function (opt) {

  if (!opt.url) {
    throw new Error('Magento Store URL is required');
  }

  if (!opt.username) {
    throw new Error('Username is required');
  }

  if (!opt.password) {
    throw new Error('Password is required');
  }

  this.url = opt.url;
  this.username = opt.username;
  this.password = opt.password;
  this.encoding = opt.encoding || 'utf8';
  this.version = opt.version || 1;
  this.isAdmin = opt.isAdmin || false;
  this.token = opt.token || false;

};

/**
 * Get Magento endpoint URL
 *
 * @param  {String}   endpoint
 *
 * @return {String}
 */
Api.prototype.getUrl = function (endpoint) {
  return this.url + '/rest/V' + this.version + '/' + endpoint;
};

/**
 * Send HTTP request
 *
 * @param  {String}   method
 * @param  {String}   endpoint
 * @param  {Object}   data
 *
 * @return {Object}
 */
Api.prototype.request = function (method, endpoint, data) {
  var url = this.getUrl(endpoint);

  var params = {
    method: method,
    encoding: this.encoding,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (this.token) {
    params.accessToken = this.token;
  } else {
    params.username = this.username;
    params.password = this.password;
  }

  if (data) {
    params.data = JSON.stringify(data);
  }

  return rest.request(url, params);
};

/**
 * GET requests
 *
 * @param  {String}   endpoint
 * @param  {Object}   data
 *
 * @return {Object}
 */
Api.prototype.get = function (endpoint, data) {
  return this.request('GET', endpoint, data);
};

/**
 * POST requests
 *
 * @param  {String}   endpoint
 * @param  {Object}   data
 *
 * @return {Object}
 */
Api.prototype.post = function (endpoint, data) {
  return this.request('POST', endpoint, data);
};

/**
 * PUT requests
 *
 * @param  {String}   endpoint
 * @param  {Object}   data
 *
 * @return {Object}
 */
Api.prototype.put = function (endpoint, data) {
  return this.request('PUT', endpoint, data);
};

/**
 * DELETE requests
 *
 * @param  {String}   endpoint
 * @param  {Object}   data
 *
 * @return {Object}
 */
Api.prototype.delete = function (endpoint, data) {
  return this.request('DELETE', endpoint, data);
};

module.exports = Api;
