var Api = require('./api');

var Store = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Store;
