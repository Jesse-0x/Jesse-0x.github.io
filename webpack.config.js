  var path = require('path');  
  module.exports = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, './'),
      },
      compress: true,
      port: 8080,
    },
  };