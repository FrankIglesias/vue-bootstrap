import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard/Dashboard';
import Books from '@/components/Books/Books';
import Layout from '@/components/Layout/Layout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/dashboard',
          component: Dashboard
        },
        {
          path: '/books/:id',
          component: Books
        }
      ]
    }
  ]
});
