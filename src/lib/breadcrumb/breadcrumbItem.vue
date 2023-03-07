<template>
  <span class="wee-breadcrumb-item" :class="{ 'is-href': to.path }" @click="handleClick">
    <span>
      <slot></slot>
    </span>
    <i class="wee-breadcrumb-separator" v-if="parent.separatorIcon">
      <component :is="parent.separatorIcon"></component>
    </i>
    <span v-else class="wee-breadcrumb-separator">{{ parent.separator }}</span>
  </span>
</template>

<script setup lang="ts">
import { inject, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  to: {
    type: Object,
    default: () => ({})
  },
  replace: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

const { to, replace } = toRefs(props)

const parent: any = inject('WeeBreadcrumbKey', undefined)

const handleClick = () => {
  if (!props.to && !router) return
  replace ? router.replace(props.to) : router.push(props.to)
}

</script>

<style scoped lang="scss">
.wee-breadcrumb-item {
  display: inline-flex;
  align-items: center;

  &.is-href {
    font-weight: 700;
    cursor: pointer;
  }

  .wee-breadcrumb-separator {
    display: inline-flex;
    padding: 3px;
    font-weight: 700;
    color: #c0c4cc;

    svg {
      width: 1.1em;
      height: 1.1em;
    }
  }

  &:last-child .wee-breadcrumb-separator {
    display: none;
  }
}
</style>
