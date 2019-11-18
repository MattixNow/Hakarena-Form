import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
require('dotenv').config()
Vue.use(VueGoogleMaps, {
  load: {
    key:process.env.maps_key,
    // v: 'GOOGLE_MAPS_VERSION',
    libraries: 'places' // Only if you need Autocomplete
  }
})