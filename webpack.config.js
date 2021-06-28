const webpack = require('webpack');

const config = require('./config');
const data = require('./data');

module.exports = {
  mode: config.env,
  entry: {
    // 'babel-polyfill':'babel-polyfill',
    '/common/js/script': `${__dirname}/${config.srcDir}/common/js/script.js`,
    '/assets/js/script': `${__dirname}/${config.srcDir}/assets/js/script.js`,
    '/room/assets/js/script': `${__dirname}/${config.srcDir}/room/assets/js/script.js`,
    '/tourism/assets/js/script': `${__dirname}/${config.srcDir}/tourism/assets/js/script.js`,
  },
  output: {
    // Output dir name
    path: `${__dirname}/${config.destDir}`,
    // Output file name
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2018 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DATA__: JSON.stringify(data),
    }),
  ],
  performance: { hints: false }
};
