<template>
  <div class="text-5xl font-bold underline flex-1">users/index.vue</div>

  <div class="p-4">hello, users! {{ msg }} {{ x }}, {{ y }}</div>
</template>

<script setup lang="ts">
const msg = ref('hello, users!')
const { x, y } = useMouse()
</script>

<style scoped></style>
