import { createRouter, createWebHistory } from 'vue-router'

import Catalog from "./views/Catalog.vue";
import PreviousWork from "./views/PreviousWork.vue";
import Home from './views/Home.vue';



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
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;