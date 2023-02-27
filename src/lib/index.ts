import { App } from 'vue'
import WeeButton from './button/index.vue'
import WeeDialog from './dialog/index.vue'
import WeeInput from './input/index.vue'
import WeeLink from './link/index.vue'
import WeeRadio from './radio/radio.vue'
import WeeRadioGroup from './radio/radio-group.vue'
import WeeSelect from './select/index.vue'
import WeeSwitch from './switch/index.vue'
import WeeTag from './tag/index.vue'
export { 
  WeeButton,
  WeeDialog,
  WeeInput,
  WeeLink,
  WeeRadio,
  WeeSelect,
  WeeSwitch,
  WeeTag,
  WeeRadioGroup
}

const components = [
  WeeButton,
  WeeDialog,
  WeeInput,
  WeeLink,
  WeeRadio,
  WeeSelect,
  WeeSwitch,
  WeeTag,
  WeeRadioGroup
]

// 全局注册主键
export function registerWeeUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

export default registerWeeUi