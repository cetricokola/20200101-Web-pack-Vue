import './src/public/sass/style.sass';
import Vue from 'vue'
import Main from './src/components/app.vue'

new Vue({
    render: (createEl)=>createEl(Main)
}).$mount('#app')
