import VueRouter from 'vue-router';

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'directives',
      component: require('./components/CkeditorPage.vue'),
    },
  ],
});

export default router;
