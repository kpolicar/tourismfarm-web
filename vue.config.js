module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/css/global.scss";
        `
      }
    }
  }
};
