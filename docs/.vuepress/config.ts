import { defineUserConfig } from 'vuepress'
import { navbar, slidebar } from './configs'
import type { DefaultThemeOptions } from 'vuepress'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineUserConfig<DefaultThemeOptions>({
  base: '/web-site/',
  // 站点配置
  lang: 'en-Us',
  title: 'bystander的修仙笔记',
  description: 'JavaScript自我修炼',
  head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
  // open: true,
  // 主题和它的配置
  theme: '@vuepress/default',
  themeConfig: {
    logo: '/images/logo.jpg', // 白天logo
    logoDark: '/images/logo.jpg', // 夜间logo
    darkMode: true, // 是否启动夜间模式
    toggleDarkMode: '夜间模式',
    repo: 'https://github.com/qjd-yyds/bystander-web-note',
    backToHome: '返回首页',
    notFound: ['你已经走火入魔了？'],
    navbar: navbar,
    sidebar: slidebar
  },
  plugins: [
    // [
    //   '@snippetors/vuepress-plugin-code-copy',
    //   {
    //     align: 'bottom',
    //     successText: '复制成功！'
    //   }
    // ],
    [
      '@vuepress/plugin-search',
      {
        // 排除首页
        isSearchable: (page: any) => page.path !== '/',
        // 允许搜索 Frontmatter 中的 `tags`
        getExtraFields: (page: any) => page.frontmatter.tags ?? []
      }
    ]
  ],
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {
    viteOptions: {
      plugins: [
        vueJsx({
          // options are passed on to @vue/babel-plugin-jsx
        }),
        // AutoImport({
        //   resolvers: [ElementPlusResolver()]
        // }),
        // Components({
        //   resolvers: [ElementPlusResolver()]
        // })
      ]
    }
  }
})
