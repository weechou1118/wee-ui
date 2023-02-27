import { radioGroupProps } from './radio-group';
import { computed, inject } from 'vue'

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean]
  },
  label: {
    type: [String, Number, Boolean]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ''
  },
  border: {
    type: Boolean,
    default: false
  }
}

export const useRadio = (props, emits) => {
  // 第二个参数不给会报warning
  const radioGroupProp: any = inject('radioGroupKey', undefined)
  const isGroup = !!radioGroupProp
  const modelValue = computed({
    get() {
      return isGroup ? radioGroupProp.modelValue : props.modelValue
    },
    set(val) {
      if (isGroup) {
        radioGroupProp.changeEvent(val)
      } else {
        emits('update:modelValue', val)
        // 改变单选框值的回调函数，在父组件接收
        emits('change', val)
      }
    }
  })
  const disabled = computed(() => props.disabled)
  const label = computed(() => props.label)
  const border = computed(() => props.border)
  const size = computed(() => isGroup ? radioGroupProp.size : props.size)
  console.log(size.value)

  const classes = computed(() => {
    return {
      'is-active': modelValue.value === props.label,
      'is-disabled': disabled.value,
      [`wee-radio-${size.value}`]: size.value,
      'has-border': border.value
    }
  })
  return {
    classes,
    disabled,
    radioGroupProp,
    isGroup,
    label,
    modelValue
  }
}
