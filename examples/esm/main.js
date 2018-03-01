import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import router from './router';
// 开发版
import VueXeditor from '../../src/index';

Vue.use(VueRouter);
Vue.use(VueXeditor);
// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
