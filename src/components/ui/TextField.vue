<template>
  <div class="text-field-container">
    <input
      v-model="model"
      class="text-field"
      :type="type"
      :placeholder="placeholder"
      :class="{
        rounded: rounded,
      }"
      :data-floating="!hasPlaceholder ? 'true' : 'false'"
    />
    <label class="text-field-label">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
  
const model = defineModel<string>()

const props = defineProps({
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  rounded: { type: Boolean, default: false },
})

const hasPlaceholder = computed(() => !!props.placeholder)
</script>