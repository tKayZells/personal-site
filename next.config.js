const path = require('path');
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/tKayZells/tKayZells.github.io/master/' : '',

    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
};