import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Index from '../views/Index'


const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/login",
        component: Login
    }
]

export default new VueRouter({
    routes
});