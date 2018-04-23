import Vue from 'vue'
import Router from 'vue-router'

/*Login*/
import Login from '@/page/login/Login.vue';
/*Main*/
import Main from '@/page/main/Main.vue';
/*Dashboard*/
import Dashboard from '@/page/dashboard/Dashboard.vue';
/*MyCruise*/
import MyCruise from '@/page/myCruise/MyCruise.vue';
/*Agents*/
import Agents from '@/page/agents/Agents.vue';
/*Help*/
import Help from '@/page/help/Help.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Public',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        {path: '/', redirect: 'dashboard'},
        {path: 'dashboard', component: Dashboard},
        {path: 'myCruise', component: MyCruise},
        {path: 'agents', component: Agents},
        {path: 'help', component: Help},
      ]
    },
    {
      path: '*',
      component: Login
    },
  ],
})
