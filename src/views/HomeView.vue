<script setup>

import SearchComponent from '@/components/SearchComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue'

import { useCountriesStore } from '@/stores/countries.js'
import { ref } from 'vue'

const store = useCountriesStore()

const countries = ref(store.countries)
const country = ref()
</script>

<template>
  <div class="flex flex-col md:flex-row md:px-[80px] lg:px-[320px] md:justify-between">
    <SearchComponent
      @keydownInput="(country_name) => {country = store.filterByName(country_name); countries = store.filterByName(country_name)}" />
    <FilterComponent @selectedRegion="(region) => countries = store.filterByRegion(region)" />
  </div>
  <div class="flex flex-col justify-center items-center mx-auto">
    <div v-if="countries.length > 0" class="grid grid-cols-1 md:grid-cols-4 gap-16">
      <CardComponent v-for="country in countries" :key="country.name" :country="country" />
    </div>
    <CardComponent :key="country['name']" :country="country" v-if="country" />
  </div>
</template>

<style scoped>

</style>