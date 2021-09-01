const path = require('path');

module.exports = {
  base: '/webgl-notes/',
  title: "WebGL Notes",
  description: "WebGL学习、开发笔记",
  dest: path.resolve(__dirname, '../../docs'),
  themeConfig: {
    sidebar: [
      "/",
      {
        title: "内置函数",
        path: "/built-in-functions/",
        children: [
          "/built-in-functions/trigonometry",
          "/built-in-functions/exponential",
          "/built-in-functions/common",
          "/built-in-functions/geometric",
          "/built-in-functions/matrix",
          "/built-in-functions/vector",
          "/built-in-functions/texture",
        ],
      },
    ],
  },
};
