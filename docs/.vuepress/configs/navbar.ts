import type { NavbarConfig } from '@vuepress/theme-default'
export const navbar: NavbarConfig = [
  {
    text: 'ES6',
    children: [
      {
        text: '模板字符串',
        link: '/ES6/template-string.md'
      },
      {
        text: 'let',
        link: '/ES6/let.md'
      },
      {
        text: 'promise',
        link: '/ES6/promise/readme.md'
      },
      {
        text: 'class',
        link: '/ES6/class/readme.md'
      },
      {
        text: 'Symbol',
        link: '/ES6/symbol.md'
      },
      {
        text: 'generator',
        link: '/ES6/generator/readme.md'
      },
      {
        text: 'async函数',
        link: '/ES6/async-await/readme.md'
      },
      {
        text: 'web workers',
        link: '/ES6/web-workers/readme.md'
      }
    ]
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
      },
      {
        text: '字典',
        link: '/algorithm/dic/readme.md'
      },
      {
        text: '哈希表',
        link: '/algorithm/hash-table/readme.md'
      },
      {
        text: '树',
        link: '/algorithm/tree/readme.md'
      },
      {
        text: '二叉树',
        link: '/algorithm/binary-tree/readme.md'
      },
      {
        text: '红黑树',
        link: '/algorithm/red–black-tree/readme.md'
      },
      {
        text: '图论',
        link: '/algorithm/graph-theory/readme.md'
      },
      {
        text: '排序',
        link: '/algorithm/sort/readme.md'
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
    text: 'rxjs',
    children: [
      {
        text: 'rxjs介绍',
        link: '/rxjs'
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
