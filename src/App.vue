<script setup>
import { RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/global.js'
import HeaderComponent from '@/components/HeaderComponent.vue'

const globalStore = useGlobalStore()


</script>

<template>
  <div :class="globalStore.theme" class="bg-white dark:bg-dark-mode-background min-h-screen">
    <HeaderComponent @custom-theme="globalStore.toggleTheme" />
    <div class="flex flex-col px-4 mt-6">
      <RouterView></RouterView>
    </div>

  </div>
</template>

<style scoped></style>