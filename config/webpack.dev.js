const config = require("./webpack.common");
const webpack = require("webpack");
webpack(config.toConfig(), (err, stats) => {
  if (stats.hasErrors()) {
    console.log(chalk.red("构建失败\n"));
    // 返回描述编译信息 ，查看错误信息
    console.log(stats.toString());
    process.exit(1);
  }

  console.log(chalk.cyan("build完成\n"));
});
