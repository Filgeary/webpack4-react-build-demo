module.exports = {
  mode: 'development',
  entry: './src/index.jsx',

  module: {
    rules: [
      // JS, JSX
      // ----------------------------------------
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // CSS
      // ----------------------------------------
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // SCSS / SASS
      // ----------------------------------------
      {
        test: /\.scss|sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

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
