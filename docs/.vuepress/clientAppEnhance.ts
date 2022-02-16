import { defineClientAppEnhance } from '@vuepress/client'
import RedBlackTree from './components/RedBlackTree'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('RedBlackTree', RedBlackTree)
})
