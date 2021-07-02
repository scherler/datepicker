const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { ANALYZE_BUNDLE } = process.env;
const plugins = [
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/datepicker.css',
        to: 'datepicker.css',
      },
    ],
  }),
];
if (ANALYZE_BUNDLE === 'true') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'datePicker',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 2 } }],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-modules-typescript-loader',
            options: {
              prefix: 'I',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[local]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: plugins,
  externals: ['react', /react-bootstrap/, /react-icons/, /react-dom/, /d3-time/],
  resolve: {
    extensions: ['.ts', '.tsx', 'svg', 'css'],
  },
};
