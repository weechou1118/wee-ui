import { createVNode, isVNode, ref, render, VNode } from 'vue'
import { MessageQueue, messageTypes } from './message'
import MessageConstructor from './message.vue'

let flag = 1
const zIndex = ref(2000)

// 整个消息列表
const instances: MessageQueue = []

const message: any = function(options = {}) {
  if (typeof options === 'string' || isVNode(options)) {
    options = { message: options }
  }
  // 消息实例的y轴距离
  let verticalOffset = options.offset || 20
  console.log(verticalOffset, 99999)
  // vm是单个实例
  instances.forEach(({ vm }) => {
    // 实时计算各个实例y轴距离，16是实例之间的间隔
    verticalOffset += (vm.el?.offsetHeight || 0) + 16
  })
  console.log(verticalOffset, 123)
  // 用于关闭的时候区分关闭的是哪个消息框
  const id = `message_${flag++}`
  // 外部触发的onClose
  const userOnClose = (options as any).onClose
  const props = {
    id,
    offset: verticalOffset,
    zIndex: zIndex.value++,
    ...options,
    onClose: () => {
      close(id, userOnClose)
    }
  }

  // 将消息框插入哪个DOM当中
  let appendTo: HTMLElement | null = document.body
  if (options.appendTo instanceof HTMLElement) {
    appendTo = options.appendTo
  } else if (typeof options.appendTo === 'string') {
    appendTo = document.querySelector(options.appendTo)
  }
  // 参数错误则默认插入body
  if (!(appendTo instanceof HTMLElement)) {
    throw new Error(
      'WeeMessage the appendTo option is not an HTMLElement. Falling back to document.body.'
    )
    appendTo = document.body
  }

  const container = document.createElement('div')
  container.className = `container_${id}`

  const message = props.message
  const vm = createVNode(
    MessageConstructor,
    props,
    isVNode(props.message) ? { default: () => message } : null
  )
  // 从外部通过emit调用
  vm.props!.onDestroy = () => {
    render(null, container)
  }

  render(vm, container)
  instances.push({ vm })
  appendTo.appendChild(container.firstElementChild!)

  return {
    close: () => ((vm.component!.proxy as any).visible = false)
  }
} 

messageTypes.forEach(type => {
  message[type] = (options = {}) => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options
      }
    }
    return message({
      ...options,
      type
    })
  }
})

export function close(id: string, userOnClose?: (vm: VNode) => void): void {
  // 关闭第几个
  const idx = instances.findIndex(({ vm }) => id === vm.component!.props.id)
  if (idx === -1) return

  const { vm } = instances[idx]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el!.offsetHeight
  instances.splice(idx, 1)

  // 重新调整其他实例的位置
  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].vm.el!.style['top'], 10) - removedHeight - 16
    instances[i].vm.component!.props.offset = pos
  }
}

export function closeAll() {
  for (let i = instances.length - 1; i >= 0; i++) {
    const instance = instances[i].vm.component
    // 每个实例调用一次close
    (instance?.proxy as any)?.close()
  }
}

message.closeAll = closeAll

export default message