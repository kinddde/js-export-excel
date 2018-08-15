const webpack = require("webpack");
const path = require("path");
const config = {
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "index.js",
    library: "js-export-excel",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["es2015"]]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
        drop_debugger: true,
        drop_console: true
      },
      mangle: {
        except: ["$super", "exports", "require"],
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ]
};
function run() {
  console.log("build start \n");

  webpack(config, (err, stats) => {
    if (err) {
      throw new Error(err);
      return;
    }
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );

    console.log("build success ! \n");
  });
}

run();
