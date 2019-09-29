const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/accounts': { page: '/accounts' },
      '/works': { page: '/works' },
      '/blogs': { page: 'blogs' },
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
