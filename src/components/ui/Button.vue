<template>
  <button
    class="button"
    :class="{
      rounded: rounded,
    }"
    :style="{
      width: width,
      height: height,
      backgroundColor: bgColor,
      color: color
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  rounded: { type: Boolean, default: false },
  width: { type: String, default: 'auto' },
  height: { type: String, default: 'auto' },
  color: { type: String, default: '--color-bg' },
  bgColor: { type: String, default: '--color-primary' },
})
</script>

