import Vue from 'vue'
import App from './App.vue'
// store 변수를 사용하기 위해 {}로 감싸줌.
import { store } from './store/store.js'

new Vue({
    el: '#app',
    // 축약
    store,
    render: h => h(App)
})