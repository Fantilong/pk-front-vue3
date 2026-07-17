<template>
  <div ref="target">pages/index.vue x:{{ x }}, y:{{ y }} {{ isOutside }}</div>
  <RouterLink to="/users/123">to /users/123</RouterLink>
  <br />
  <RouterLink to="/users">to /users</RouterLink>

  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
</template>

<script setup lang="ts">
// import { RouterLink } from 'vue-router'

const target = ref<HTMLElement | null>(null)
const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
