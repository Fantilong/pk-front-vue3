<template>
  <div>
    study.vue
    {{ query.id }}
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@/hooks'

const query = useQuery<{ id: string }>()
</script>

<style scoped></style>
