var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
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
      }
    ]
  }
};
