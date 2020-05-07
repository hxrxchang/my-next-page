const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  env: {
    gaTrackingId: process.env.gaTrackingId,
  },
});
