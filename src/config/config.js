// 自定义配置，参考 ./default/setting.config.js，需要自定义的属性在这里配置即可
module.exports = {
  theme: {
    color: '#13c2c2',
    mode: 'dark',
  },
  multiPage: true,
  asyncRoutes: true,
  port:8888,
  animate: {
    name: 'lightSpeed',
    direction: 'left'
  },

  systemName: 'DGG 网管助手',         //系统名称
  copyright: '2018 ICZER 工作室出品 ',     //copyright
  footerLinks: [                        //页面底部链接，{link: '链接地址', name: '名称/显示文字', icon: '图标，支持 ant design vue 图标库'}
    {link: 'http://map.dgg.net/', name: '网址导航'},
    { link: 'http://map.dgg.net/',name: '武汉胡杰开发'},
  ],
}
