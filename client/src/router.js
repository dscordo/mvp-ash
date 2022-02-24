import { createRouter, createWebHistory } from 'vue-router'

import Catalog from "./views/Catalog.vue";
import PreviousWork from "./views/PreviousWork.vue";
import Home from './views/Home.vue';
import About from './views/About.vue';
import CustomOrder from './views/CustomOrder.vue';


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
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;