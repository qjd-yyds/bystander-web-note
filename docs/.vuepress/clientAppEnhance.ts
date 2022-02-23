import { defineClientAppEnhance } from '@vuepress/client'
import RedBlackTree from './components/RedBlackTree'
import deBounceHoc from './components/HightFn/deBounceHoc'
import throttleHoc from './components/HightFn/throttleHoc'
import box from './components/animal/box.vue'
import 'element-plus/dist/index.css'
import Element from 'element-plus'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(Element)
  app.component('RedBlackTree', RedBlackTree)
  app.component(deBounceHoc.name, deBounceHoc)
  app.component(throttleHoc.name, throttleHoc)
  app.component(box.name, box)
})
