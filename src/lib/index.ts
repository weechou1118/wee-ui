import { App } from 'vue'
import WeeButton from './button/index.vue'
export { WeeButton }

const components = [WeeButton]

// 全局注册主键
export function registerWeeUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
    console.log(component.name)
  }
}

export default registerWeeUi