/**
 * This webpack config file is just for PHPStorm to read the resource file. The functional WebPack file webpack.mix.js
 */

const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', 'ts'],
      alias: {
      '@fuck': path.resolve(__dirname, './resources/js')
    }
  },
};
