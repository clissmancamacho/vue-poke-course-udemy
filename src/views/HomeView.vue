<template>
  <div>
    <h1>Home Counter: {{ useCounter.count }}</h1>
    <h1>Double: {{ useCounter.double }}</h1>
    <button @click="useCounter.increment">Incrementar</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';

const useCounter = useCounterStore()
</script>

<style lang="scss" scoped>

</style>