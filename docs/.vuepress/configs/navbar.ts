import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/'
  },
  {
    text: '前端三剑客',
    children: [
      {
        text: 'CSS',
        link: '/css/bfc'
      },
      {
        text: 'HTML5',
        link: '/html/ajax/'
      },
      {
        text: 'JavaScript',
        link: '/javascript/socpe'
      }
    ]
  },
  {
    text: '数据结构和算法',
    children: [
      {
        text: '什么是数据结构和算法',
        link: '/algorithm/readme.md'
      },
      {
        text: '栈',
        link: '/algorithm/stack/readme.md'
      },
      {
        text: '队列',
        link: '/algorithm/queue/readme.md'
      },
      {
        text: '优先级队列',
        link: '/algorithm/priority-queue/readme.md'
      },
      {
        text: '链表',
        link: '/algorithm/linked-list/readme.md'
      },
      {
        text: '双向链表',
        link: '/algorithm/doubly-linked-list/readme.md'
      },
      {
        text: '集合',
        link: '/algorithm/set/readme.md'
      }
    ]
  },
  {
    text: 'vue笔记',
    children: [
      {
        text: '响应式系统搭建',
        link: '/vue笔记/响应式系统搭建/readme.md'
      }
    ]
  },
  {
    text: 'linux入门',
    children: [
      {
        text: 'shell脚本',
        link: '/linux/index.md'
      }
    ]
  }
]
