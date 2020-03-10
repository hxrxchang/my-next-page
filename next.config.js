const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
});
