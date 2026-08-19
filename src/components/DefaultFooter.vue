<template>
  <Container>
    <!-- 菜单信息 -->

    <!-- 介绍，联系信息，媒体信息，外链 -->
    <!-- ICP备案信息 -->
    <div class="copy-right">{{ copyright }}, {{ links }}, {{ contacts }}</div>
  </Container>
</template>

<script setup lang="ts">
interface LinkType {
  title: string
  url: string
}

interface ContactsType {
  email: string
  phone?: string
  address?: string
}

interface FootItem {
  icp?: string
  copyright?: string
  links?: LinkType[]
  contacts?: ContactsType[]
}

// 设置props值类型，并设置默认值
withDefaults(defineProps<FootItem>(), {
  icp: '123',
  copyright: '234',
  links: () => [{ title: 'title123', url: 'url123' }],
  contacts: () => [{ email: 'email123' }],
})

//   {
//   icp: {
//     type: String,
//     default: '',
//   },
// }
</script>

<style scoped></style>
