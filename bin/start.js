#!/usr/bin/env node
'use strict';

require('babel/register');

var path = require('path');

require('app-module-path').addPath(path.join(__dirname, '../src'));

var env = process.env.NODE_ENV || 'development';

var Start = require('start');
new Start();