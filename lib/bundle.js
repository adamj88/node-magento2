var Api = require('./api');

var Bundle = function (opt) {

  this.Api = new Api(opt);

};

module.exports = Bundle;
