<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ type: 'fraction', el: '.pagination' }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :class="height"
  >
    <swiper-slide v-for="item in items" :key="item.image">
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start">
              <p class="text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-lg text-gray-100 pt-4 pb-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div
      class="flex items-center justify-center absolute right-0 bottom-0 bg-white opacity-50 text-dark-30 w-32 h-8 z-30"
    >
      <div class="pagination w-unset!important font-bold mr-4"></div>
      <div class="prev">
        <div class="i-mdi-arrow-left-thin prev" style="font-size: 2rem"></div>
      </div>
      <div class="next">
        <div class="i-mdi-arrow-right-thin" style="font-size: 2rem"></div>
      </div>
    </div>
  </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import type { SwiperItemType } from './types'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => [],
  },
  swiperHeight: {
    type: Number,
    default: 80,
  },
})

const height = computed(() => {
  return `h-${props.swiperHeight}`
})

const modules = [Navigation, Pagination]

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
</style>
