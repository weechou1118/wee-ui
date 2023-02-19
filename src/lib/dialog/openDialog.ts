import WeeDialog from '@/lib/dialog/index.vue'
import { h, createApp } from 'vue'

const openDialog = function(
  options = {
    title: () => '标题',
    content: () => '内容',
    overlayClosable: true,
    cancel: () => {},
    confirm: () => {},
  }
) {
  const { title, content, overlayClosable, cancel, confirm } = options
  const div = document.createElement('div')
  document.body.appendChild(div)

  const app = createApp({
    render() {
      return h(
        WeeDialog,
        {
          modelValue: true,
          'onUpdate:modelValue': (newVisible) => {
            if (!newVisible) {
              close()
            }
          },
          overlayClosable,
          cancel,
          confirm
        },
        {
          title,
          default: content
        }
      )
    }
  })

  app.mount(div)
  const close = () => {
    div.remove()
    app.unmount()
  }
}

export default openDialog