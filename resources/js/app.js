import './bootstrap';
import Vue from 'vue';
import Board from './Board';
import apolloProvider from './apollo.config';
import router from "./router.config.js";
import store from "./vuex.config.js"

window.Vue = Vue;


Vue.component('Board', Board);


const app = new Vue({
    el: '#app',
    apolloProvider,
    router,
    store
});
