import { defineClientAppEnhance } from '@vuepress/client'
import RedBlackTree from './components/RedBlackTree'
import deBounceHoc from './components/HightFn/deBounceHoc'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('RedBlackTree', RedBlackTree)
  app.component(deBounceHoc.name, deBounceHoc)
})
