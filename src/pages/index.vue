<template>
  <div>
    <Swiper :items="items" height="h-70"></Swiper>
    <Card :image="bg" image-type="avatar" title="title2" sub-title="subTitle1" border></Card>
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
