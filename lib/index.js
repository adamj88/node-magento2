var Api = require('./api');
var Catalog = require('./catalog');

module.exports = function (opt) {
  return {
    Api: new Api(opt),
    Catalog: new Catalog(opt)
  };
};

module.exports.Api = function (opt) {
  return new Api(opt);
};

module.exports.Catalog = function (opt) {
  return new Catalog(opt);
};
