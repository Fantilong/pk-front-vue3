<template>
  <div>
    id:
    {{ route.id }}

    <md></md>
  </div>
</template>

<script setup lang="ts">
import { useParams } from '@/hooks'
import md from './test.md'

type Params = {
  id: string
}
const route = useParams<Params>()
</script>

<style scoped></style>
