<script setup>
import { useGlobalStore } from '@/stores/global.js'
import { ref } from 'vue'

const globalStore = useGlobalStore()
const selectedRegion = ref('Filter By Region')

const emit = defineEmits(['selectedRegion'])

function handleSelectedRegion() {
  emit('selectedRegion', selectedRegion.value)
}
</script>

<template>
  <div class="flex w-full md:w-fit mt-9 md:mt-0 drop-shadow-2xl">
    <select name="region" id="region" v-model="selectedRegion" @mouseup="handleSelectedRegion"
            class="bg-white text-dark-blue py-2 px-6 text-start w-[200px] font-nunito font-normal text-sm dark:bg-dark-blue dark:text-white">
      <option selected>Filter By Region</option>
      <option :value="region" v-for="region in globalStore.regions" :key="region">{{ region }}</option>
    </select>
  </div>
</template>

<style scoped>

</style>