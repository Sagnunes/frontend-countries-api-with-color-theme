import { defineStore } from 'pinia'
import countries from '@/data.json'

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    jsonCountries: countries
  }),
  computed: defineStore('countries', {}),
  getters: {
    filterByName(state) {
      return (name) => {
        return state.jsonCountries.find((country) => country.name.includes(name))
      }
    },
    filterByRegion(state) {
      return (region) => {
        return state.jsonCountries.filter((country) => country.region.includes(region))
      }
    },
    countries: (state) => state.jsonCountries
  }
})