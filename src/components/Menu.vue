<template>
  <div :class="['flex', { 'flex-col': align === 'vertical' }]">
    <router-link class="item" to="/">产品</router-link>
    <a class="item" href="https://www.imooc.com" target="_blank">社区</a>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
  align: {
    type: String as PropType<'vertical' | 'horizontal'>,
  },
})
</script>

<style scoped lang="scss">
// method1: 使用transformer
.item {
  @apply relative text-white text-xl px-8 py-2 cursor-pointer font-300 lt-sm:self-start;

  &.router-link-active {
    @apply text-main font-500;
    &:after {
      @apply content-[''] absolute bg-main! w-8 h-[1px] bottom-0 left-[calc(50%-1rem)];
    }
  }

  &:hover {
    @apply hover:font-500;
    &:after {
      @apply content-[''] absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50%-1rem)];
    }
  }
}
</style>
