<template>
  <div class="text-5xl font-bold underline flex-1">users/index.vue</div>

  <div class="p-4">hello, users! {{ msg }} {{ x }}, {{ y }}</div>
  <HelloWorld :msg="{ name: 'John', sex: 1 }" @click="(v) => console.log(v)"></HelloWorld>
  <UserProfile></UserProfile>
  <!-- <MdiStore24Hour width="10rem" height="10rem" color="skyblue" />
  <i-mdi-account-box style="font-size: 2em; color: red" />

  <i-carbon-accessibility />

  <i-inline-foo />
  <i-inline-async />

  <i-ph-anchor-simple-thin /> -->

  <!-- <MdiStore24Hour width="10rem" height="10rem" color="skyblue" /> -->
</template>

<script setup lang="ts">
// import MdiStore24Hour from 'virtual:icons/mdi/store-24-hour'

const msg = ref('hello, users!')
const { x, y } = useMouse()
</script>

<style scoped></style>
