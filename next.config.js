const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins([withTypescript], {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/accounts': { page: '/accounts' },
      '/works': { page: '/works' },
    };
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
});
