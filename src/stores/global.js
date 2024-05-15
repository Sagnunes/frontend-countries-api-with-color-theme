import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const theme = ref('light')

  const regions = ['Africa','America','Asia','Europe','Oceania'];

  function toggleTheme() {
    if(theme.value === 'light')
      theme.value = 'dark'
    else
      theme.value = 'light'
  }

  return { theme, toggleTheme, regions }
})
