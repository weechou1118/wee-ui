import { computed, ref } from 'vue'
export const inputProps = {
  modelValue: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: Object
  },
  prefixIcon: {
    type: Object
  },
  rows: {
    type: Number,
    default: 2
  }
}

export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled)
  const clearable = computed(() => props.clearable)
  const nativeInputValue = computed(() => props.modelValue)

  const showPassword = computed(() => props.showPassword)
  const showPasswordVisible = ref(true)

  const placeholder = computed(() => props.placeholder)
  const rows = computed(() => props.rows)

  const type = computed(() => {
    if (showPassword.value && showPasswordVisible.value) {
      return 'password'
    } else if (props.type === 'textarea') {
      return 'textarea'
    } else {
      return 'text'
    }
  })

  const classes = computed(() => {
    return {
      'wee-input': type.value !== 'textarea',
      'is-disabled': disabled.value,
      'is-suffix-icon': props.suffixIcon,
      'is-prefix-icon': props.prefixIcon
    }
  })

  return {
    classes,
    disabled,
    clearable,
    nativeInputValue,
    showPassword,
    placeholder,
    type,
    showPasswordVisible,
    rows
  }
}