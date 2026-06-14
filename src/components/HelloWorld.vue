<script setup lang="ts">
defineProps<{
  msg: {
    name: string
    sex: 0 | 1
    age?: number
  }
}>()
</script>

<template>
  <div class="greetings">{{ msg }}</div>
</template>

<style scoped></style>
