<template>
  <div>
    <h1>Home Counter: {{ count }}</h1>
    <h1>Double: {{ double }}</h1>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();
const { count, double } = storeToRefs(useCounter)
const { increment } = useCounter
</script>

<style lang="scss" scoped>

</style>