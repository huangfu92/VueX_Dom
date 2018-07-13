import Vue from 'vue'
import Router from 'vue-router'
import Vuex from '@/components/Vuex'
import TodoList from '@/components/TodoList'
import UserList from '@/components/UserList'
import UserItem from '@/components/UserItem'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: '',
    //   component: TodoList
    // },
    {
      path: '/',
      name: '',
      component: Vuex
    },
    {
      path: '/UserList',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/UserItem',
      name: 'UserItem',
      component: UserItem
    }
  ]
})
