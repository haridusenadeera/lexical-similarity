var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src/app.jsx')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        // test for both js and jsx
        test: /\.jsx?$/,

        // use babel loader with Stage 0 features
        loader: 'babel?stage=0',

        // operate only on our app directory
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,

        loader: 'json-loader'
      },
      {
        test: /\.css$/,

        loader: 'style-loader!css-loader',

        include: path.join(__dirname, 'src')
      }
    ]
  }
};
