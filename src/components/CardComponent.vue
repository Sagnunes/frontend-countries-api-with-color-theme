<script setup>
defineProps(['country'])
</script>

<template>
  <router-link :to="{ name: 'country', params:{slug:country['name']}}">
    <div class="flex flex-col drop-shadow-2xl mt-20 h-[356px] w-[264px] rounded-2xl bg-white dark:bg-dark-blue">
      <img :src="country['flag']" alt="" class="rounded-t-2xl w-full ">
      <div class="p-6">
        <h2 class="font-nunito font-extrabold text-lg dark:text-white">{{ country['name'] }}</h2>
        <div class="flex flex-col space-y-1 mt-4">
          <p class="font-nunito font-semibold text-sm dark:text-white">Population: <span
            class="font-light dark:text-white">{{ country['population'] }}</span></p>
          <p class="font-nunito font-semibold text-sm dark:text-white">Region: <span
            class="font-light dark:text-white">{{ country['region'] }}</span></p>
          <p class="font-nunito font-semibold text-sm dark:text-white">Capital: <span
            class="font-light dark:text-white">
          {{ country['capital'] }}</span>
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>

</style>