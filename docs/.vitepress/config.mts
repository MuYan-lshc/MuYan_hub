import { defineConfig } from 'vitepress'

const base = "/MuYan_hub/" // 仓库名，必须加斜杠

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "MuYanHub",
  description: "构建我的知识体系,技术沉思与代码洞见,代码、思考与无限进步.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    // 侧边栏项目
    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     {text: 'api', link: '/ap-examples'},
      //     {text:'home',link:'/index'}
      //   ]
      // }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
