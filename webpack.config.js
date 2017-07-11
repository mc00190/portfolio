var path = require('path');

module.exports = [{
    entry: {
      js: './src/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    module: {
      rules: [{
        test: /\.(html?)$/,
        use: {
          loader: 'html-loader',
          options: {
            name: './[name].[ext]'
          }
        }
      }, {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        ]
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
        include: [
            path.resolve(__dirname, 'src', 'img')
        ],
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './img/[name].[ext]'
          }
        }
      }]
    }
}];
