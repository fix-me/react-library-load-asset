// Webpack V4 configuration file

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'fixme1library.js',
    library: 'fixme1library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "react",
              "env",
              "stage-0"
            ]
          }
        }
      },
      {
        test: /\.ya?ml$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './assets')
    ]
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  plugins: [
    //new webpack.IgnorePlugin(/testFile/)
  ],
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: false,
    port: process.env.npm_package_config_ports_webpack,
    stats: 'minimal',
    disableHostCheck: true,
  },
  watch: true
};
