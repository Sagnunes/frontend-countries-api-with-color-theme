import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faMoon,regularMoon,faMagnifyingGlass, faArrowLeft]);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')