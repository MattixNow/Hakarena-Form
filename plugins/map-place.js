import Vue from 'vue';

if (process.BROWSER_BUILD) {
    import VueGoogleAutocomplete from 'vue-google-autocomplete';
    Vue.component('vue-google-autocomplete', VueGoogleAutocomplete);
}