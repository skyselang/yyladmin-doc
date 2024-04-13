const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');

module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题

  title: "yylAdmin",
  description: '一个基于ThinkPHP8和Vue3的极简后台管理系统',
  base: '/yyladmin-doc/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'yylAdmin,thinkphp,element-plus' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],
  port: 9529,
  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南', link: '/guide/intro/', items: [
          { text: '介绍', link: '/guide/intro/' },
          { text: '基础', link: '/guide/base/' },
          { text: '安装', link: '/guide/install/' },
          { text: '目录', link: '/guide/catalogue/' },
          { text: '配置', link: '/guide/config/' },
          { text: '鸣谢', link: '/guide/thank/' },
          { text: '支持', link: '/guide/support/' },
          { text: '更新日志', link: '/guide/uplog/' },
        ]
      },
      {
        text: '开发', link: '/develop/add/', items: [
          { text: '开发', link: '/develop/add/' },
          { text: '前端', link: '/web/token/' },
          { text: '后端', link: '/admin/timer/' },
          { text: '调试', link: '/debug/apidoc/' },
        ]
      },
      {
        text: '教程', link: '/course/dev-tools/', items: [
          { text: '开发工具推荐', link: '/course/dev-tools/' },
          { text: '宝塔面板部署', link: '/course/bt-deploy/' },
          { text: '前后端部署到同一域名', link: '/course/same-domain-name/' },
        ]
      },
      {
        text: '问答', link: '/fqa/cross-domain/', items: [
          { text: '跨域问题', link: '/fqa/cross-domain/' },
          { text: '接口文档问题', link: '/fqa/apidoc/' },
          { text: 'NodeJS版本问题', link: '/fqa/nodejs-version/' },
          { text: '新版文档', link: '/fqa/new-doc/' },
        ]
      },
      {
        text: '版本', link: '/guide/intro/', items: [
          { text: 'v4', link: '/guide/intro/' },
          { text: 'v3', link: '/v3/pages/guide/' },
        ]
      },
      { text: '演示', link: '/guide/intro/#演示' },

      { text: 'Gitee', link: 'https://gitee.com/skyselang/yylAdmin' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/hero-image.png', // 导航栏logo
    repo: 'skyselang/yylAdmin', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字 string | boolean (取值为git提交时间)

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },

    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。

    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'skyselang', // 必需
      href: 'https://gitee.com/skyselang' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      icons: [
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/skyselang/yylAdmin'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/skyselang/yylAdmin'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2018, // 创建年份
      copyrightInfo: 'yylAdmin | Apache-2.0', // 版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    ['fulltext-search'], // 全文搜索

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],

    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],

    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  // Markdown
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4']
  }
}
