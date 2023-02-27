export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean]
  },
  size: {
    type: String,
    default: ''
  }
}

export const radioGroupEmits = ['update:modelValue', 'change']