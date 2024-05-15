<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

let textInput = ref()

const emit = defineEmits(['keydownInput'])

function handleInput() {
  emit('keydownInput', textInput.value)
}
</script>

<template>
  <div class="flex flex-row bg-white w-full h-[48px] drop-shadow-lg items-center px-8 space-x-5 dark:bg-dark-blue md:w-[480px]">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="-rotate-12 text-gray-600 dark:text-white" />
    <input type="text" placeholder="Search for a country" class="placeholder:text-xs placeholder:text-gray-400 md:text-sm
    border-transparent
    focus:border-transparent focus:ring-0 text-sm text-gray-600 dark:placeholder:text-white dark:bg-dark-blue dark:text-white" v-model="textInput" @keydown="handleInput" />
  </div>
</template>

<style scoped>

</style>