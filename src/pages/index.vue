<template>
  <div>
    <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
    <Container>
      <!-- 标题 -->
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
        <!-- for遍历的内容： 课程 -->
        <a
          :href="item.url"
          v-for="(item, index) in projects"
          :key="index"
          target="_blank"
          class="flex"
        >
          <Card
            class="w-full rounded-0"
            :icon="item.icon"
            image-type="rounded"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
              查看更多
              <div class="i-mdi:arrow-right-thin"></div>
            </div>
          </Card>
        </a>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import type { SwiperItemType } from '@/components/types'
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/stores/useThemeStore'

const store = useThemeStore()

const projects = [
  {
    title: '前端高级工程师',
    subTitle: 'sdfasdfasdfasfasdfasdfasdfasd',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web',
  },
  {
    title: '前端高级工程师',
    subTitle: 'sdfasdfasdfasfasdfasdfasdfasd',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web',
  },
  {
    title: '前端高级工程师',
    subTitle: 'sdfasdfasdfasfasdfasdfasdfasd',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web',
  },
  {
    title: '前端高级工程师',
    subTitle: 'sdfasdfasdfasfasdfasdfasdfasd',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web',
  },
  {
    title: '前端高级工程师',
    subTitle: 'sdfasdfasdfasfasdfasdfasdfasd',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web',
  },
]

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
