<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <h1>Pinia funcionando 🚀</h1>

  <p>Count: {{ counter.count }}</p>
  <p>Double: {{ counter.double }}</p>

  <button @click="counter.increment">
    Incrementar
  </button>
</template>
