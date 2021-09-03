const path = require("path");
const Token = require("markdown-it/lib/token");
const sidebarConf = require("./sidebar");

module.exports = {
  base: "/webgl-notes/",
  title: "WebGL Notes",
  description: "WebGL学习、开发笔记",
  dest: path.resolve(__dirname, "../../docs"),
  themeConfig: {
    sidebar: sidebarConf,
  },
  chainWebpack(config) {
    config.module
      .rule("shader")
      .test(/\.(frag|vert)$/)
      .use("raw")
      .loader("raw-loader");
  },
  markdown: {
    extendMarkdown: (md) => {
      // 每个md文件解析后都会应用一次该规则
      md.core.ruler.push("update_template", function replace({ tokens }) {
        const fragmentToken = tokens.find(
          (token) =>
            token.type === "fence" &&
            /glsl/.test(token.info) &&
            token.markup === "```"
        );
        if (!fragmentToken) return;
        const uniformsToken = tokens.find(
          (token) =>
            token.type === "fence" &&
            /json/.test(token.info) &&
            token.markup === "```"
        );
        const glslCanvasToken = new Token("html_block");
        let uniforms = {};
        if (uniformsToken) {
          try {
            uniforms = JSON.parse(uniformsToken.content);
          } catch (error) {
            console.log(error);
          }
        }
        const uniformsString = JSON.stringify(uniforms).replace(/"/g, "'");
        glslCanvasToken.content = `<GlslCanvas fragmentShader="${fragmentToken.content}" :uniforms="${uniformsString}" />\n`;
        // 插入h1之后
        const insertIndex = tokens.findIndex(
          (token) => token.type === "heading_close" && token.tag === "h1"
        );
        tokens.splice(insertIndex + 1, 0, glslCanvasToken);
      });
    },
  },
};
