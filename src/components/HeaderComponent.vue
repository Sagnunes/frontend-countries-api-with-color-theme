<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useGlobalStore } from '@/stores/global.js'

const emit = defineEmits(['customTheme'])
const globalStore = useGlobalStore()

function btnChangeTheme() {
  emit('customTheme')
}

</script>

<template>
  <div
    class="flex flex-row bg-white dark:bg-dark-blue h-20 items-center justify-around drop-shadow-lg md:px-[90px] lg:px-[335px] md:justify-between">
    <p class="font-nunito text-sm font-extrabold text-light-mode-very-dark-blue dark:text-white md:text-2xl">Where in
      the world?</p>
    <div class="flex flex-row items-center space-x-2">
      <font-awesome-icon :icon="['fa-regular', 'moon']" class="-rotate-12" v-show="globalStore.theme === 'light'" />
      <font-awesome-icon :icon="['fas', 'moon']" class="-rotate-12 text-white"
                         v-show="globalStore.theme === 'dark'" />
      <button @click="btnChangeTheme"
              class="font-nunito text-xs font-semibold text-light-mode-very-dark-blue dark:text-white md:text-base">Dark
        Mode
      </button>
    </div>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>