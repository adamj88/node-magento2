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

  var api = new Api(opt);

  return {
    Api: api,
    Backend: new Backend(api),
    Bundle: new Bundle(api),
    Catalog: new Catalog(api),
    CatalogInventory: new CatalogInventory(api),
    Checkout: new Checkout(api),
    CheckoutAgreements: new CheckoutAgreements(api),
    ConfigurableProduct: new ConfigurableProduct(api),
    Cms: new Cms(api),
    Customer: new Customer(api),
    Directory: new Directory(api),
    Downloadable: new Downloadable(api),
    Eav: new Eav(api),
    GiftMessage: new GiftMessage(api),
    Integration: new Integration(api),
    Quote: new Quote(api),
    Sales: new Sales(api),
    SalesRule: new SalesRule(api),
    Search: new Search(api),
    Store: new Store(api),
    Tax: new Tax(api)
  };

};
