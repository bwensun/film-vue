import Vue from 'vue'
import VueRouter from 'vue-router'

import Content from '../components/Content'
import First from '../components/First'
import Login from '../views/Login'
import Index from '../views/Index'


const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/content",
        component: Content
    },      
    {
        path: "/first",
        component: First
    },
    {
        path: "/login",
        component: Login
    }
]

export default new VueRouter({
    routes
});