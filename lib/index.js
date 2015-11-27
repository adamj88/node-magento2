var Api = require('./api');
var Backend = require('./backend');
var Bundle = require('./bundle');
var Catalog = require('./catalog');
var CatalogInventory = require('./cataloginventory');
var Checkout = require('./checkout');
var CheckoutAgreements = require('./checkoutagreements');
var ConfigurableProduct = require('./configurableproduct');
var Cms = require('./cms');
var Customer = require('./customer');
var Directory = require('./directory');
var Downloadable = require('./downloadable');
var Eav = require('./eav');
var GiftMessage = require('./giftmessage');
var Integration = require('./integration');
var Quote = require('./quote');
var Sales = require('./sales');
var SalesRule = require('./salesrule');
var Search = require('./search');
var Store = require('./store');
var Tax = require('./tax');

module.exports = function (opt) {
  return {
    Api: new Api(opt),
    Backend: new Backend(opt),
    Bundle: new Bundle(opt),
    Catalog: new Catalog(opt),
    CatalogInventory: new CatalogInventory(opt),
    Checkout: new Checkout(opt),
    CheckoutAgreements: new CheckoutAgreements(opt),
    ConfigurableProduct: new ConfigurableProduct(opt),
    Cms: new Cms(opt),
    Customer: new Customer(opt),
    Directory: new Directory(opt),
    Downloadable: new Downloadable(opt),
    Eav: new Eav(opt),
    GiftMessage: new GiftMessage(opt),
    Integration: new Integration(opt),
    Quote: new Quote(opt),
    Sales: new Sales(opt),
    SalesRule: new SalesRule(opt),
    Search: new Search(opt),
    Store: new Store(opt),
    Tax: new Tax(opt)
  };
};

module.exports.Api = function (opt) {
  return new Api(opt);
};

module.exports.Backend = function (opt) {
  return new Backend(opt);
};

module.exports.Bundle = function (opt) {
  return new Bundle(opt);
};

module.exports.Catalog = function (opt) {
  return new Catalog(opt);
};

module.exports.CatalogInventory = function (opt) {
  return new CatalogInventory(opt);
};

module.exports.Checkout = function (opt) {
  return new Checkout(opt);
};

module.exports.CheckoutAgreements = function (opt) {
  return new CheckoutAgreements(opt);
};

module.exports.ConfigurableProduct = function (opt) {
  return new ConfigurableProduct(opt);
};

module.exports.Cms = function (opt) {
  return new Cms(opt);
};

module.exports.Customer = function (opt) {
  return new Customer(opt);
};

module.exports.Directory = function (opt) {
  return new Directory(opt);
};

module.exports.Downloadable = function (opt) {
  return new Downloadable(opt);
};

module.exports.Eav = function (opt) {
  return new Eav(opt);
};

module.exports.GiftMessage = function (opt) {
  return new GiftMessage(opt);
};

module.exports.Integration = function (opt) {
  return new Integration(opt);
};

module.exports.Quote = function (opt) {
  return new Quote(opt);
};

module.exports.Sales = function (opt) {
  return new Sales(opt);
};

module.exports.SalesRule = function (opt) {
  return new SalesRule(opt);
};

module.exports.Search = function (opt) {
  return new Search(opt);
};

module.exports.Store = function (opt) {
  return new Store(opt);
};

module.exports.Tax = function (opt) {
  return new Tax(opt);
};
