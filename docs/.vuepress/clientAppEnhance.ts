import { defineClientAppEnhance } from '@vuepress/client'
import 'element-plus/dist/index.css'
import RedBlackTree from './components/RedBlackTree'
import deBounceHoc from './components/HightFn/deBounceHoc'
import throttleHoc from './components/HightFn/throttleHoc'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('RedBlackTree', RedBlackTree)
  app.component(deBounceHoc.name, deBounceHoc)
  app.component(throttleHoc.name, throttleHoc)
})
