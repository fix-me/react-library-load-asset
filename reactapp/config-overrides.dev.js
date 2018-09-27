const webpack = require('webpack');
const path = require('path');

module.exports = function(config) {
  
  config.plugins = config.plugins || [];
  
  config.resolve = config.resolve || {};
  
  config.resolve.alias = config.resolve.alias || {};
  
}