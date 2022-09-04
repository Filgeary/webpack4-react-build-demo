module.exports = {
  mode: 'development',

  module: {
    rules: [
      // images
      // ----------------------------------------
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]',
            },
          },
        ],
      },

      // fonts
      // ----------------------------------------
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
}
