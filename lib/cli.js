#!/usr/bin/env node
'use strict';
var meow = require('meow');
var nodeMagento2 = require('./');
var pkg = require('../');

var cli = meow({
  pkg: pkg,
  help: [
    'Usage',
    '  $ nodeMagento2 [input]',
    '',
    'Examples',
    '  $ nodeMagento2',
    '  unicorns',
    '',
    '  $ nodeMagento2 rainbows',
    '  unicorns & rainbows',
    '',
    'Options',
    ' --foo Lorem ipsum. Default: false'
  ]
});
