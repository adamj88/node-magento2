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

};
