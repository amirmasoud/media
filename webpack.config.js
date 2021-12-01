/**
 * This webpack config file is just for PHPStorm to read the resource file. The functional WebPack file webpack.mix.js
 */

const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', 'ts'],
      alias: {
      '@': path.resolve(__dirname, './resources/js')
    },
    module: {
      rules: [
        {
          test: path.join(__dirname, 'resources/js/**/*.tsx'),
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [path.join(__dirname, 'resources/js/**/*.vue')],
          },
          exclude: /node_modules/,
        },
        {
          test: path.join(__dirname, 'resources/js/**/*.tsx'),
          loader: 'vue-loader',
        }
      ]
    }
  },
};
