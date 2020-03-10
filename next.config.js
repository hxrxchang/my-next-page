const withPlugins = require('next-compose-plugins');

// const blogIdList = ['hello-world'];

module.exports = withPlugins([], {
  // exportPathMap: () => {
  //   const pathMap = {
  //     '/': { page: '/' },
  //     '/accounts': { page: '/accounts' },
  //     '/works': { page: '/works' },
  //     '/blogs': { page: '/blogs' },
  //   };

  //   blogIdList.forEach((blogId) => {
  //     pathMap[`/blog/${blogId}`] = { page: '/blog/[id]', query: { id: blogId } };
  //   });
  //   return pathMap;
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
});
