<template>
  <div>
    <Swiper :items="items" :swiper-height="70"></Swiper>
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import type { SwiperItemType } from '@/components/types'
import bg from '@/assets/images/bg.png'

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '标题1',
    subTitle: '副标题1',
    desc: '描述1',
  },
  {
    image: bg,
    title: '标题1',
    subTitle: '副标题1',
    desc: '描述1',
  },
  {
    image: bg,
    title: '标题1',
    subTitle: '副标题1',
    desc: '描述1',
  },
  {
    image: bg,
    title: '标题1',
    subTitle: '副标题1',
    desc: '描述1',
  },
]

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(swUrl, r) {
      setInterval(
        () => {
          r && r.update()
        },
        60 * 60 * 1000,
      )
    },
  })
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
