const path = require('path');

module.exports = {
  title: "WebGL Notes",
  description: "WebGL学习、开发笔记",
  dest: path.resolve(__dirname, '../../docs'),
  themeConfig: {
    sidebar: [
      "/",
      {
        title: "内置函数",
        path: "/built-in-functions/",
        children: ["/built-in-functions/min"],
      },
    ],
  },
};
