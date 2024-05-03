const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  publicPath: '/button_with_sound/',
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8888'
  }
})
