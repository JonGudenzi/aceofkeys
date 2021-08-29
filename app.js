//This is a vue app object//
const app = Vue.createApp({
    data() {
        return {
            automotiveNav: 'Automotive',
            residentialNav: 'Residential',
            commercialNav: 'Commercial',
            vueLink: 'https://vuejs.org/'
        };
    },
  
});

app.mount('#navigation');