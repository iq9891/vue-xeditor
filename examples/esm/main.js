import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import router from './router';
// 开发版
import EmCkeditor from '../../src/index';

Vue.use(VueRouter);
Vue.use(EmCkeditor);
// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
