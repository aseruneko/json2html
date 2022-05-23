module.exports = {
    mode: 'development',
    entry: './src/json2html.ts',
    output: {
      filename: 'json2html.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    },
  };