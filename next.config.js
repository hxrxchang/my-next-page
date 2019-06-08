const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins([withTypescript], {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/accounts': { page: '/accounts' },
      '/works': { page: '/works' },
    };
  },
});
