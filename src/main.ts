import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

/// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  }).mount('#app')

  import 'bootstrap/dist/js/bootstrap.js';
