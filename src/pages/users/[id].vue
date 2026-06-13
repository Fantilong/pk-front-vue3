<template>
  <div>users/[id].vue {{ route.params.id }} {{ name }}</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute('/users/[id]')
const router = useRouter()
const name = router.currentRoute.value
</script>

<style scoped></style>
