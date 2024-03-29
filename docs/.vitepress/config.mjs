import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yylAdmin",
  description: "基于ThinkPHP和Vue的极简后台管理系统",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  ignoreDeadLinks: [
    // 忽略所有 localhost 链接
    /^http?:\/\/localhost/,
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/image/yyladmin-logo.png",

    nav: [
      { text: "指南", link: "/guide/intro" },
      { text: "开发", link: "/dev/develop/add" },
      { text: "问答", link: "/fqa/dev-tools" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          collapsed: false,
          items: [
            { text: "介绍", link: "/guide/intro" },
            { text: "基础", link: "/guide/base" },
            { text: "安装", link: "/guide/install" },
            { text: "目录", link: "/guide/catalogue" },
            { text: "配置", link: "/guide/config" },
            { text: "鸣谢", link: "/guide/thank" },
            { text: "支持", link: "/guide/support" },
            { text: "更新日志", link: "/guide/uplog" },
          ],
        },
      ],
      "/dev/": [
        {
          text: "开发",
          collapsed: false,
          items: [
            { text: "新增功能", link: "/dev/develop/add" },
            { text: "添加后台接口", link: "/dev/develop/admin" },
            { text: "添加后台菜单权限", link: "/dev/develop/menu" },
            { text: "添加后台页面", link: "/dev/develop/page" },
            { text: "刷新后台菜单权限", link: "/dev/develop/refresh" },
            { text: "添加前台接口", link: "/dev/develop/api" },
            { text: "添加接口文档调试", link: "/dev/develop/apidoc" },
            { text: "接口生成器", link: "/dev/develop/crud" },
          ],
        },
        {
          text: "前端",
          collapsed: false,
          items: [
            { text: "token", link: "/dev/web/token" },
            { text: "多级目录", link: "/dev/web/nested" },
          ],
        },
        {
          text: "后端",
          collapsed: false,
          items: [
            { text: "缓存", link: "/dev/admin/cache" },
            { text: "定时任务", link: "/dev/admin/timer" },
            { text: "队列支持", link: "/dev/admin/queue" },
          ],
        },
        {
          text: "调试",
          collapsed: false,
          items: [
            { text: "异常处理", link: "/dev/debug/exception" },
            { text: "接口文档", link: "/dev/debug/apidoc" },
          ],
        },
      ],
      "/fqa/": [
        {
          text: "问答",
          collapsed: false,
          items: [
            { text: "开发工具推荐", link: "/fqa/dev-tools" },
            { text: "宝塔面板部署", link: "/fqa/bt-deploy" },
            { text: "前后端部署到同一域名", link: "/fqa/same-domain-name" },
            { text: "跨域问题", link: "/fqa/cross-domain" },
            { text: "接口文档问题", link: "/fqa/apidoc" },
            { text: "NodeJS版本问题", link: "/fqa/nodejs-version" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: {
          svg: '<?xml version="1.0" encoding="UTF-8"?><svg width="72px" height="72px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>logo_gitee_g_red@1x</title><g id="LOGO" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard-7" transform="translate(-192.000000, -115.000000)" fill="#C71D23"><path d="M228,115 C247.882251,115 264,131.117749 264,151 C264,170.882251 247.882251,187 228,187 C208.117749,187 192,170.882251 192,151 C192,131.117749 208.117749,115 228,115 Z M246.223335,131 C246.222967,131 246.2226,131 246.222232,131.001102 L221.33326,131.001102 C213.969504,131.001102 208,136.970606 208,144.334362 L208,169.222232 C208,170.204066 208.795934,171 209.777768,171 L236.000329,171 C242.627564,171 248,165.627564 248,159.000329 L248,148.778425 C248,147.796591 247.204066,147.000657 246.222232,147.000657 L225.7779,147.000657 C224.796248,147.001123 224.000389,147.796773 223.999667,148.778425 L223.998503,153.222667 C223.997802,154.155409 224.715909,154.920565 225.629522,154.994969 L225.775805,155.00042 L225.775805,155.00042 L238.222276,155.000317 C239.155019,155.000295 239.919992,155.718618 239.994164,156.63225 L240.000044,156.77807 L240.000044,156.77807 L240.000044,157.666909 C240.000044,160.612411 237.612243,163.000213 234.66674,163.000213 L217.776621,163.000213 C216.794928,163.000164 215.999101,162.204358 215.999025,161.222665 L215.998559,144.334184 C215.998337,141.462319 218.268172,139.120556 221.111731,139.005187 L221.331716,139.00088 L221.331716,139.00088 L246.21727,139.00088 C247.198674,138.999777 247.994429,138.204515 247.996141,137.223112 L247.998897,132.77887 C248.000609,131.797037 247.205169,131.000609 246.223335,131 Z" id="logo_gitee_g_red"></path></g></g></svg>',
        },
        link: "https://gitee.com/skyselang/yylAdmin",
      },
      { icon: "github", link: "https://github.com/skyselang/yylAdmin" },
    ],

    footer: {
      message: "Apache-2.0 License",
      copyright: "Copyright © 2018-" + new Date().getFullYear() + " skyselang",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    search: {
      provider: "local",
      options: {
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
  },
});
