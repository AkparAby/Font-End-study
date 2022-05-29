module.exports = {
  //声明babel可用的插件
  //将来,webpack 在调用babel-loader 的时候会先加载plugins 插件来使用
  plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
};
