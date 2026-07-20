<template>
  <div :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`">
    default layout
    <div class="next-page">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
</script>

<style scoped></style>
