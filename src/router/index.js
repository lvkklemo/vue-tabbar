import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home/home.vue'
import Doctor from '../components/Doctor/doctor.vue'
import Family from '../components/Family/family.vue'
import My from '../components/My/my.vue'
//免费咨询
import Chat from '../components/Home/chat.vue'
//健康记录
import Health from '../components/Home/health.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
        children:[
            {
                name:'chat',
                path: ':id',
                component: Chat,
            },
            {
                name:'health',
                path: '/health',
                component: Health,
            }
        ]
    },
    {
        path: '/doctor',
        component: Doctor
    },
    {
        path: '/family',
        component: Family
    },
    {
        name:'my',
        path: '/my',
        component: My
    }
  ]
})
