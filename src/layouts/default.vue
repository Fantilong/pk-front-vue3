<template>
  <div class="fixed top-0 w-full z-[50]" :class="{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }">
    <Container>
      <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="" />
      <div
        class="hidden! i-ic-round-menu text-gray-300! text-xl absolute top-3 right-3 cursor-pointer hover:text-gray-100! lt-sm:block!"
        @click="() => toggle()"
      ></div>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>
  <RouterView />
  <div class="h-[4000px]"></div>
  <div class="footer">
    <div class="mobile-hide">default footer</div>
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

<style scoped></style>
