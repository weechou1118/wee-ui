import { VNode } from 'vue'

// as const 断言 子属性不可篡改
export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export const messageProps = {
  id: {
    type: String,
    default: ''
  },
  message: {
    type: [String, Object],
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  onClose: {
    type: Function,
    require: false
  },
  zIndex: {
    type: Number,
    default : 2000
  },
  offset: {
    type: Number,
    default: 20
  },
  duration: {
    type: Number,
    default: 2000
  },
  showClose: {
    type: Boolean,
    default: false
  },
  isCenter: {
    type: Boolean,
    default: false
  }
}

export const messageEmits = ['destroy']

type MessageQueueItem = {
  vm: VNode
}

export type MessageQueue = MessageQueueItem[]