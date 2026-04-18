module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [{
        destination: "variables.css",
        format: "css/variables"
      }]
    },
    js: {
      transformGroup: "js",
      buildPath: "dist/js/",
      files: [{
        destination: "tokens.js",
        format: "javascript/es6"
      }]
    },
    android: {
      transformGroup: "android",
      buildPath: "dist/android/",
      files: [{
        destination: "colors.xml",
        format: "android/resources",
        filter: (token) => token.type === "color"
      }]
    }
  }
};
