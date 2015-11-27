var Api = require('./api');

module.exports = function (opt) {
  return {
    Api: new Api(opt)
  };
};

module.exports.Api = function (opt) {
  return new Api(opt);
};
