const glob = require('glob');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CriticalCssPlugin = require('critical-css-webpack-plugin')

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif)$/i }),
    ...glob.sync('./dist/*.html').map((htmlFile) => {
      return new CriticalCssPlugin({
        base: common.output.path,
        src: htmlFile,
        target: path.basename(htmlFile),
        extract: true,
        inline: true,
        width: 1920,
        height: 1080
      });
    })
  ],
});
