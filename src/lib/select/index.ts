import { computed } from 'vue'

type option = {
  label: string
  value: string
}

export const selectProps = {
  modelValue: {
    type: [String, Array<option>],
    default: ''
  },
  options: {
    type: Array<option>,
    default: () => []
  },
  useDisabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  }
}

export const useSelect = (props, emits) => {
  const modelValue = computed(() => props.modelValue)
  const options = computed(() => props.options)
  const useDisabled = computed(() => props.useDisabled)
  const multiple = computed(() => props.multiple)
  const clearable = computed(() => props.clearable)

  const showValue = computed((): any => {
    if (typeof modelValue === 'string') {
    }
    return modelValue.value
  })

  return {
    modelValue,
    options,
    useDisabled,
    multiple,
    clearable,
    showValue
  }
}