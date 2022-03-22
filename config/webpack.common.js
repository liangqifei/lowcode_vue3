const Config = require("webpack-chain");
const config = new Config();
config.mode("development");
config.entryPoints.clear(); // 会把默认的入口清空
config.entry("index"); //新增入口
config.output
  .path("dist")
  .filename("[name].[chunkhash].js")
  .chunkFilename("chunks/[name].[chunkhash].js");
// .libraryTarget("umd")
// .library();
//设置通用别名
// config.resolve.alias.set("@", "src");
config.resolve.extensions
  .prepend(".ts")
  .add(".tsx")
  .add(".js")
  .add(".jsx")
  .add(".vue")
  .add(".less")
  .add(".json")
  .end();
config.target("browser");
config.module
  .rule("vue")
  .test(/\.vue$/)
  .use("vue-loader");
config.module
  .rule("ts")
  // .include.add("src")
  .end()
  .test(/\.tsx?$/)
  .use("ts-loader");
config.module
  .rule("js")
  .test(/\.js?$/)
  // .include.add("src")
  .end()
  .use("babel-loader")
  .options({
    presets: ["preset-env"],
    plugins: ["transform-vue-jsx"],
  });

config.devServer.port(3333).open(true).proxy({}).hot(true);
// config.plugin(name).tap((args) => newArgs);
// config.plugin("html-webpack").use("html-webpack-plugin", {
//   title: "lowcode",
//   template: "../public/index.html",
// });

export default config;
