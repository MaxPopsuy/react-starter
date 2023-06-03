const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 8000
  },
  eslint: {
    enable: true,
    mode: 'extends',
    configure: {
      parserOptions: {
        parser: "babel-eslint",
        sourceType: "module"
      },
      env: {
        browser: true,
        es6: true
      },
      extends: [
        "eslint:recommended",
      ],
      rules: {
        quotes: [
          "error",
          "double",
          {
            avoidEscape: true
          }
        ],
      }
    },
  },
  webpack: {
    alias: {
      "@src": path.join(path.resolve(__dirname, "./src")),
      "@root": path.join(path.resolve(__dirname, "./")),
      "@components": path.join(path.resolve(__dirname, "./src/components")),
      "@store": path.join(path.resolve(__dirname, "./src/store")),
      "@scss": path.join(path.resolve(__dirname, "./src/scss")),
      "@images": path.join(path.resolve(__dirname, "./src/images")),
      "@utils": path.join(path.resolve(__dirname, "./src/utils")),
      "@pages": path.join(path.resolve(__dirname, "./src/pages")),
      "@public": path.join(path.resolve(__dirname, "./public")),
      "@config": path.join(path.resolve(__dirname, "./src/config")),
    },
  },
};
