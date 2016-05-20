/*
 * Main entry point for this application.
 */

/* eslint no-console:0 */

const fs = require('fs');
const throng = require('throng');
const serverStart = require('./lib/local/system/server').default;
const WORKERS = process.env.WEB_CONCURRENCY || 1;

// read in package details
global.__package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// configure servers
const serverOptions = {
  distPath: __dirname + '/dist/',
  version: __package.version,
  baseUrlPath: '/dist'
};

// start servers
throng(function (id) { serverStart(id, serverOptions); }, { workers: WORKERS, lifetime: Infinity });
