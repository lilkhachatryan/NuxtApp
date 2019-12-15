import Vue from 'vue'
// import VueAutosuggest from "vue-autosuggest";

// Vue.use(VueAutosuggest);

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

// Don't forget to include the Bootstrap CSS/SCSS files!
import 'bootstrap/scss/bootstrap.scss'

// Global registration
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)