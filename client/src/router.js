import { createRouter, createWebHistory } from 'vue-router'

import Catalog from "./views/Catalog.vue";
import PreviousWork from "./views/PreviousWork.vue";
import Home from './views/Home.vue';
import About from './views/About.vue';
import CustomOrder from './views/CustomOrder.vue';
import AdminView from './views/AdminView.vue';
import AdminLogin from './views/AdminLogin.vue';
import Register from './views/Register.vue';


const routes = [
    { 
        path: '/', 
        component: Home
    },
    { 
        path: '/previouswork', 
        component: PreviousWork
        
    },
    { 
        path: '/catalog', 
        component: Catalog
        
    },
    { 
        path: '/about', 
        component: About
    },
    { 
        path: '/customorder', 
        component: CustomOrder
    },
    { 
        path: '/adminview', 
        component: AdminView
    },
    { 
        path: '/adminlogin', 
        component: AdminLogin
    },
    { 
        path: '/register', 
        component: Register
    }

];


const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;