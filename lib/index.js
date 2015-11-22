var rest = require('restler');

module.exports = function (opt) {

  opt = opt || {};

  if (!(opt.url)) {
    throw new Error('Magento Store URL is required');
  }

  if (!(opt.username)) {
    throw new Error('Username is required');
  }

  if (!(opt.password)) {
    throw new Error('Password is required');
  }

  this.url      = opt.url;
  this.username = opt.username;
  this.password = opt.password;
  this.version  = opt.version || 1;
  this.encoding = opt.encoding || 'utf8';

  /**
   * Get Magento endpoint URL
   *
   * @param  {String}   endpoint
   *
   * @return {String}
   */
  this.getUrl = function (endpoint) {
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
  this.request = function (method, endpoint, data) {
    var url = this.getUrl(endpoint);

    var params = {
      method   : method,
      encoding : this.encoding,
      username : this.username,
      password : this.password,
      headers  : {
        Accept         : 'application/json',
        'Content-Type' : 'application/json'
      }
    };

    if (data) {
      params.data = JSON.stringify(data);
    }

    return rest.request(url, params);
  };

  /**
   * GET requests
   *
   * @param  {String}   endpoint
   *
   * @return {Object}
   */
  this.get = function (endpoint) {
    return this.request('GET', endpoint, null);
  };

  /**
   * POST requests
   *
   * @param  {String}   endpoint
   * @param  {Object}   data
   *
   * @return {Object}
   */
  this.post = function (endpoint, data) {
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
  this.put = function (endpoint, data) {
    return this.request('PUT', endpoint, data);
  };

  /**
   * DELETE requests
   *
   * @param  {String}   endpoint
   *
   * @return {Object}
   */
  this.delete = function (endpoint) {
    return this.request('DELETE', endpoint, null);
  };

};
