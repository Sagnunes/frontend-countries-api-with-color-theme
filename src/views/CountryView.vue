<script setup>

import { useCountriesStore } from '@/stores/countries.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const countryStore = useCountriesStore()

const country = ref()
const props = defineProps(['slug'])


country.value = countryStore.filterByName(props.slug)
</script>

<template>

  <div class="px-2 mt-6 md:flex md:flex-col md:justify-center md:mx-auto">
    <div
      class="flex flex-row items-center space-x-2 drop-shadow-2xl border w-fit px-6 py-2 dark:border-none dark:text-white">
      <font-awesome-icon :icon="['fa', 'arrow-left']" />
      <router-link to="/" class="text-sm font-nunito font-light text-[111517]">Back</router-link>
    </div>
    <div class="flex flex-col md:flex-row md:space-x-16 ">
      <div>
        <img :src="country[0]['flag']" alt="country_flag" class="rounded-2xl mt-8 md:w-[560px] md:h-[401px]">
      </div>
      <div class="mt-6 flex flex-col justify-center md:w-[400px]">
        <h2 class="font-nunito font-extrabold text-lg dark:text-white mb-6">{{ country[0]['name'] }}</h2>
        <div class="flex flex-col md:flex-row md:justify-between">
          <div class="flex flex-col space-y-1 mt-4 md:mt-0">
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Native Name:
              <span class="font-light dark:text-white">{{ country[0]['nativeName'] }}</span>
            </p>
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Population:
              <span class="font-light dark:text-white">{{ country[0]['population'] }}</span>
            </p>
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Region:
              <span class="font-light dark:text-white">{{ country[0]['region'] }}</span>
            </p>
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Sub Region:
              <span class="font-light dark:text-white">{{ country[0]['subregion'] }}</span>
            </p>
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Capital:
              <span class="font-light dark:text-white">{{ country[0]['capital'] }}</span>
            </p>
          </div>
          <div class="mt-8 space-y-2 md:mt-0">
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Top Level Domain:
              <span class="font-light dark:text-white mr-1" v-for="topLevel in country[0]['topLevelDomain']"
                    :key="topLevel">{{ topLevel }}</span>
            </p>
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Currencies:
              <span class="font-light dark:text-white mr-1" v-for="currency in country[0]['currencies']"
                    :key="currency.code">{{ currency.code
                }}</span>
            </p>
            <p class="font-nunito font-semibold text-sm dark:text-white">
              Languages:
              <span class="font-light dark:text-white mr-1" v-for="(language,key) of country[0]['languages']"
                    :key="language.name">
            {{ language.name }}
             <span v-if="key !== Object.keys(language).length - 1">,</span>
          </span>
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <h3 class="font-nunito text-md font-bold dark:text-white mt-8">Border Countries:</h3>
          <div class="grid grid-cols-3 place-items-center gap-2 mt-4" v-if="country[0]['borders']">
            <div
              class="border px-8 py-1 font-nunito text-[#111517] text-xs font-light dark:text-white dark:border-none dark:bg-dark-blue dark:drop-shadow-2xl "
              v-for="border in country[0]['borders']" :key="border">{{ border }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>