module.exports = {
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: false,
    host: 'localhost',
    port: 8091,
    https: false,
    hotOnly: false,
    // http 代理配置
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8091/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        ws: false
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.kkcode.designer',
        productName: 'designer', // 项目名，也是生成的安装文件名，即aDemo.exe
        copyright: 'Copyright © 2020', // 版权信息
        directories: {
          output: './dist_electron' // 输出文件路径
        },
        asar: false,
        win: {
          icon: './build/app.ico',
          requestedExecutionLevel: 'requireAdministrator',
          target: [
            {
              target: 'nsis',
              arch: [
                'x64' // ,'ia32'
              ]
            }
          ]
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          // "installerIcon": "./public/electronbuild/kk.ico",// 安装图标
          // "uninstallerIcon": "./public/electronbuild/kk.ico",//卸载图标
          // "installerHeaderIcon": "./public/electronbuild/kk.ico", // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: 'designer' // 图标名称
        },
        mac: {
          icon: './build/app.icns'
        }
      }
    }
  }
}
