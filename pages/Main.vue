<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref(0)

onMounted(() => {
  const data = router.options.routes[0]
  active.value = data.children.findIndex((item) => '/' + item.path === route.path)
})
</script>

<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in router.options.routes[0].children"
      :key="item.path"
      :icon="item.meta.icon"
      :url="`#/${item.path}`"
      >{{ item.meta.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<style scoped></style>
