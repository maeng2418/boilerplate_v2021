const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      services: path.resolve(__dirname, 'src/shared/services'),
      interfaces: path.resolve(__dirname, 'src/shared/interfaces'),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components/index"),
      pages: path.resolve(__dirname, "src/pages/index"),
      stores: path.resolve(__dirname, "src/stores"),
      styles: path.resolve(__dirname, "src/styles"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  };

  return config;
};
