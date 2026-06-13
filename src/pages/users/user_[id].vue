<template>
  <div>users/user_[id].vue {{ route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute('/users/[id]')
</script>

<style scoped></style>
