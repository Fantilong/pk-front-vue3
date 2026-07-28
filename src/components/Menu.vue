<template>
  <div class="flex">
    <router-link class="router-link" to="/">产品</router-link>
    <a class="router-link" href="https://www.imooc.com" target="_blank">社区</a>
    <router-link class="router-link" to="/study">学习</router-link>
    <router-link class="router-link" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// method1: 使用transformer
.router-link {
  @apply relative text-white text-xl px-8 py-2 cursor-pointer font-300;

  &:hover {
    @apply hover:font-500;
    &:after {
      @apply content-none absolute bg-gray-100 w-8 h-1 bottom-0 left-[calc(50%-1rem)];
    }
  }
}
</style>
