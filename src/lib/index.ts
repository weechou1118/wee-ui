import { App } from 'vue'
import WeeButton from './button/index.vue'
import WeeDialog from './dialog/index.vue'
export { WeeButton, WeeDialog }

const components = [WeeButton, WeeDialog]

// 全局注册主键
export function registerWeeUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

export default registerWeeUi