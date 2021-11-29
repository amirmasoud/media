const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.ts', 'public/js')
  .extract()
  .vue(3)
  .postCss('resources/css/app.css', 'public/css', [
    require("tailwindcss"),
  ])
  .alias({
    '@': path.join(__dirname, 'resources/js')
  })
  .webpackConfig({
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
  })
  .version();
