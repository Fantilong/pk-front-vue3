<script setup lang="ts">
defineProps<{
  msg: {
    name: string
    sex: 0 | 1
    age?: number
  }
}>()

const emits = defineEmits<{ click: [id?: number] }>()

const handleClick = () => {
  emits('click', 123)
}
</script>

<template>
  <div class="greetings">{{ msg }}</div>
  <button @click="handleClick">click</button>
</template>

<style scoped></style>
