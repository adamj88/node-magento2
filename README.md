# Consume Magento 2 REST API

[![Build Status](https://travis-ci.org/adamj88/node-magento2.svg?branch=master)](https://travis-ci.org/adamj88/node-magento2)

Currently a work in progress.

Wrapper for connecting to Magento 2 REST API. 

## Installation

```sh
npm install magento2 --save
```

## Example Usage

This uses [restler](https://github.com/danwrong/restler) as a HTTP Client library, please see their documentation for more examples/sample usage.

```js
var Magento2 = require('magento2');

var opt = {
  url: 'http://example.com', // without trailing slash
  username: 'username',
  password: 'password',
  isAdmin: true
};

var magento = new Magento2(opt);

// Create a Token
magento.Api.token = magento.Integration.getToken().on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    return result;
  }
});

// Get Category list
categories = magento.Catalog.getCategories.on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    return result;
  }
});
```

## Options

|      Option      |   Type     | Required |                             Description                              |
| ---------------- | ---------- | -------- | -------------------------------------------------------------------- |
| `url`            | `String`   | yes      | Your Store URL, example: http://example.com (without trailing slash) |
| `username`       | `String`   | yes      | Your API username                                                    |
| `password`       | `String`   | yes      | Your API password                                                    |
| `version`        | `Interger` | no       | API version, default is `1`                                          |
| `encoding`       | `String`   | no       | Encoding, default is 'utf-8'                                         |
| `isAdmin`        | `Boolean`  | no       | Is user admin or customer, default is false (custoemr)               |

## End points

For a complete list of endpoints see:

- http://devdocs.magento.com/guides/v2.0/rest/list.html
- http://devdocs.magento.com/swagger/index.html

Those implemented in this module:

- [ ] Backend [#1](https://github.com/adamj88/node-magento2/issues/1)
- [ ] Bundle [#2](https://github.com/adamj88/node-magento2/issues/2)
- [ ] Catalog [#3](https://github.com/adamj88/node-magento2/issues/3)
- [ ] CatalogInventory [#4](https://github.com/adamj88/node-magento2/issues/4)
- [ ] Checkout [#5](https://github.com/adamj88/node-magento2/issues/5)
- [ ] CheckoutAgreements [#6](https://github.com/adamj88/node-magento2/issues/6)
- [ ] ConfigurableProduct [#20](https://github.com/adamj88/node-magento2/issues/20)
- [ ] Cms [#7](https://github.com/adamj88/node-magento2/issues/7)
- [ ] Customer [#8](https://github.com/adamj88/node-magento2/issues/8)
- [ ] Directory [#9](https://github.com/adamj88/node-magento2/issues/9)
- [ ] Downloadable [#10](https://github.com/adamj88/node-magento2/issues/10)
- [ ] Eav [#11](https://github.com/adamj88/node-magento2/issues/11)
- [ ] GiftMessage [#12](https://github.com/adamj88/node-magento2/issues/12)
- [x] Integration [#13](https://github.com/adamj88/node-magento2/issues/13)
- [ ] Quote [#14](https://github.com/adamj88/node-magento2/issues/14)
- [ ] Sales [#15](https://github.com/adamj88/node-magento2/issues/15)
- [ ] SalesRule [#16](https://github.com/adamj88/node-magento2/issues/16)
- [ ] Search [#19](https://github.com/adamj88/node-magento2/issues/19)
- [ ] Store [#17](https://github.com/adamj88/node-magento2/issues/17)
- [ ] Tax [#18](https://github.com/adamj88/node-magento2/issues/18)
