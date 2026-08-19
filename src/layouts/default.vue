<template>
  <div
    class="fixed top-0 w-full z-[50] transition-all duration-300 h-0"
    :class="[{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }, { ' lt-sm:(bg-black h-full)': show }]"
  >
    <Container>
      <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="" />
      <div
        :class="[
          'hidden text-gray-300 text-xl absolute top-3 right-3 cursor-pointer hover:text-gray-100 lt-sm:block',
        ]"
        @click="() => toggle()"
      >
        <transition name="rotate-icon" mode="out-in">
          <div v-if="show" class="i-ic-round-close"></div>
          <div v-else class="i-ic-round-menu"></div>
        </transition>
      </div>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>
  <RouterView />
  <div class="h-[40px]"></div>
  <div class="footer">
    <div class="mobile-hide">
      <DefaultFooter></DefaultFooter>
    </div>
    <div class="hidden mobile">mobile-footer</div>
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
const [show, toggle] = useToggle(false)

const flag = ref(false)

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    toggle(true)
    flag.value = false
  } else {
    if (flag.value) return
    flag.value = true
    toggle(false)
  }
})
</script>

<style scoped lang="scss">
.rotate-icon-enter-active {
  animation: scaleYIn 0.3s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
