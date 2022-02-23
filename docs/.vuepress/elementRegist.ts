import 'element-plus/dist/index.css'
import { App } from 'vue'
import { ElButton } from 'element-plus'
export function regist(app: App) {
  app.use(ElButton)
}
