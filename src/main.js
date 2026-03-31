import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowDown,
  faArrowLeft,
  faUser,
  faUsers,
  faClock,
  faScrewdriverWrench,
  faCode,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faLinkedin,
  faGithub,
  faInstagram,
  faArrowDown,
  faArrowLeft,
  faUser,
  faUsers,
  faClock,
  faScrewdriverWrench,
  faCode,
  faEnvelope,
)

import './assets/main.css'

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.mount('#app')
