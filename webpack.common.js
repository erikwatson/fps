const path = require('path')

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'fps.js',
    path: path.resolve(__dirname, 'build')
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
